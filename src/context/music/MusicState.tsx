import React, { useReducer, useState } from "react";
import { AudioDataService } from "./audioDataService";
import { musicReducer } from "./musicReducer";
import MusicContext, { IState, IAction } from "./musicContext";

// export const audioService = new AudioDataService();

function get(url: string) {
  return new Promise((accept, reject) => {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
    req.onload = function(event) {
      var resp = req.response;
      if (resp) {
        accept(resp);
      }
    };
    req.send(null);
  });
}

const MusicState = (props: any): JSX.Element => {
  const initialState: IState = {
    // isPlaying: false,
    loading: true,
    audioData: {} as any
  };

  const [isPlaying, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [uuid, setUUID] = useState("");
  const [metaData, setMetaData] = useState({});
  const [audioService] = useState(new AudioDataService());

  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(
    musicReducer,
    initialState
  );

  const getAudio = async (url: string, uuid: string, metadata: {}) => {
    try {
      let resp = await get(url)
        .then(resp => {
          audioService.getBinaryData(resp);
        })
        .then(() => {
          setUUID(uuid);
          setMetaData(metadata);
          setPlaying(true);
          setLoaded(true);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const getCurrentPosition = () => {
    return audioService.getCurrentPosition();
  };

  const rewindAudio = () => {
    return audioService.rewindAudio();
  };

  const pauseAudio = () => {
    audioService.pauseAudio();
    setPlaying(audioService.playing);
  };

  const getCurrentTime = () => {
    return audioService.getCurrentTime();
  };

  const getDuration = () => {
    return audioService.getDuration();
  };

  const playAudio = () => {
    audioService.playAudio();
    setPlaying(true);
  };

  const stopAudio = () => {
    audioService.stopAudio();
    setPlaying(false);
  };

  const { loading, audioData } = state;

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        loading,
        loaded,
        audioData,
        getAudio,
        pauseAudio,
        playAudio,
        rewindAudio,
        stopAudio,
        metaData,
        getCurrentTime,
        getCurrentPosition,
        getDuration,
        uuid
      }}
    >
      {props.children}
    </MusicContext.Provider>
  );
};

export default MusicState;
