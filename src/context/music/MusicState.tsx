import React, { useReducer, useState } from "react";
import axios from "axios";
import { AudioDataService } from "./audioDataService";

import { musicReducer } from "./musicReducer";
import MusicContext, { IState, IAction } from "./musicContext";
import { types } from "./../types";
import { response } from "express";

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
  const [uuid, setUUID] = useState("");
  const [audioService] = useState(new AudioDataService());

  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(
    musicReducer,
    initialState
  );

  const getAudio = async (url: string, uuid: string) => {
    // delete axios.defaults.headers.common["Authorization"];
    try {
      //   audioService.stopAudio();
      let resp = await get(url)
        .then(resp => {
          audioService.getBinaryData(resp);
        })
        .then(() => {
          setUUID(uuid);
          setPlaying(true);
        });
    } catch (err) {
      console.log(err);
    }

    // return axios({
    //   method: "get",
    //   url: url,
    //   responseType: "arraybuffer"
    // })
    //   .then(res => audioService.getBinaryData(res.data))
    //   .then(() => {
    //     setUUID(uuid);
    //     setPlaying(true);
    //   })
    //   .catch(err => console.log(err));
  };

  //   const getAudio = (stream: string, uuid: string) => {
  //     audioService
  //       .getAudio(stream)
  //       .then(() => {
  //         setUUID(uuid);
  //         setPlaying(true);
  //       })
  //       .catch(err => console.log(err));
  //   };

  const pauseAudio = () => {
    audioService.pauseAudio();
    setPlaying(audioService.playing);
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
        audioData,
        getAudio,
        pauseAudio,
        playAudio,
        stopAudio,
        uuid
      }}
    >
      {props.children}
    </MusicContext.Provider>
  );
};

export default MusicState;
