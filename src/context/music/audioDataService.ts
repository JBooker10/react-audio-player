import axios from "axios";

export class AudioDataService {
    ctx: any;
    buffer: any;
    source: any;
    analyser: any;
    duration: any;
    position: any;
    startTime: any;
    playing: any;
    loaded: any;
    id: any;

    public constructor() {
        this.ctx = new AudioContext();
    }





    getAudio = (url: string) => {
        delete axios.defaults.headers.common["Authorization"];
        return axios({
            method: 'get',
            url: url,
            responseType: 'arraybuffer'
        }).then(res => this.getBinaryData(res.data))
    }

    getBinaryData = (buffer: any) => {
        this.ctx.decodeAudioData(buffer, (audio: any) => {
            this.buffer = audio;
            this.connection()
            this.loaded = true;
            // this.playAudio()
            this.source.start()
            // this.playing = true;
        })
    }

    connection = () => {
        if (this.playing) {
            this.pauseAudio()
        }
        this.source = this.ctx.createBufferSource();
        this.analyser = this.ctx.createAnalyser();
        this.source.buffer = this.buffer;
        this.source.connect(this.ctx.destination)
    }

    stopAudio = () => {
        this.ctx.close()
        this.playing = false
        this.ctx = new AudioContext()

    }

    // playAudio = (start?: any, position?: number) => {
    //     this.position = typeof position === 'number' ?
    //         position : this.position || 0;
    //     this.startTime = this.ctx.currentTime - this.position || 0;
    //     this.source.start()
    //     this.playing = true;
    // }

    // pauseAudio() {
    //     if (this.source) {

    //         this.source.stop(0)
    //         this.source = null;
    //         this.position = this.ctx.currentTime - this.startTime;
    //         this.playing = false;
    //     }
    // }

    pauseAudio() {
        this.ctx.suspend()
    }

    playAudio() {
        this.ctx.resume()
    }

    toggle(playing: boolean) {
        if (!playing) {
            this.playAudio()
        } else {
            this.pauseAudio()
        }
    }


    getCurrentPosition(): number {
        this.position = this.playing ?
            this.ctx.currentTime - this.startTime : this.position;
        if (this.position >= this.buffer.duration) {
            this.position = this.buffer.duration;
            this.pauseAudio();
        }
        return this.position;
    }

    getDuration(): number {
        return this.buffer.duration;
    }
}