import React, { useReducer } from "react";
import axios from "axios";

import { libraryReducer } from "./libraryReducer";
import LibraryContext, { IState, IAction } from "./libraryContext";
import { types } from "./../types";

const api = "http://localhost:8000/v1";

const LibraryState = (props: any): JSX.Element => {
  const initialState: IState = {
    user: {
      FirstName: "",
      LastName: "",
      Avatar: "",
      DOB: new Date(),
      Email: "",
      CreatedAt: new Date()
    },
    tracks: [],
    artists: [],
    albums: [],
    album: {} as any,
    track: {} as any,
    errors: {},
    payload: {},
    loading: true
  };

  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(
    libraryReducer,
    initialState
  );

  const getTracks = () => {
    axios
      .get(api + "/library/tracks")
      .then(response =>
        dispatch({
          type: types.GET_TRACKS,
          payload: response.data,
          errors: {}
        })
      )
      .catch(e => console.log(e));
  };

  const getTrack = (hash: string) => {
    axios
      .get(api + `/library/tracks/${hash}`)
      .then(response =>
        dispatch({
          type: types.GET_TRACK,
          payload: response.data,
          errors: {}
        })
      )
      .catch(e => console.log(e));
  };

  const getArtists = () => {
    axios
      .get(api + "/library/artists")
      .then(response =>
        dispatch({
          type: types.GET_ARTISTS,
          payload: response.data,
          errors: {}
        })
      )
      .catch(e => console.log(e));
  };

  const getAlbum = (id: string) => {
    axios
      .get(api + "/library/albums/" + id)
      .then(response => {
        dispatch({
          type: types.GET_ALBUM,
          payload: response.data,
          errors: {}
        });
      })
      .catch(e => console.log(e));
  };

  const getAlbums = () => {
    axios
      .get(api + "/library/albums")
      .then(response =>
        dispatch({
          type: types.GET_ALBUMS,
          payload: response.data,
          errors: {}
        })
      )
      .catch(e => console.log(e));
  };

  const { user, track, tracks, artists, albums, album, loading } = state;

  return (
    <LibraryContext.Provider
      value={{
        user,
        tracks,
        track,
        getTracks,
        getTrack,
        artists,
        getArtists,
        getAlbums,
        getAlbum,
        albums,
        album,
        loading
      }}
    >
      {props.children}
    </LibraryContext.Provider>
  );
};

export default LibraryState;
