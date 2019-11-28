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
            this.source.start();
            this.playing = true;
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

    rewindAudio = () => {
        // // this.pauseAudio();
        console.log(this.ctx)
        // this.ctx.currentTime = 0;
        // // this.playAudio();
        // // console.log(this.position);
    }

    pauseAudio() {
        this.playing = false;
        this.ctx.suspend()
    }

    playAudio() {
        this.playing = true;
        this.ctx.resume()
    }

    toggle(playing: boolean) {
        if (!playing) {
            this.playAudio()
        } else {
            this.pauseAudio()
        }
    }


    getCurrentPosition() {
        this.position = this.playing ?
            this.ctx.currentTime - this.startTime : this.position;

        if (this.position >= this.source.duration) {
            this.position = this.source.duration;
            this.pauseAudio();
        }
        return this.position;
    }

    getCurrentTime() {
        if (this.playing) {
            return this.ctx.currentTime
        } else if (this.ctx.currentTime >= this.getDuration()) {
            return this.getDuration()
        }
        return this.position;
    }

    getDuration(): number {
        if (this.playing) {
            return this.buffer.duration;
        }
        return 0
    }
}