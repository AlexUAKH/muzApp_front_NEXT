import {TrackActionsType, TracksAction} from "../../types/track";
import {Dispatch} from "react";
import axios from "../../api/axios";

export const fetchTracks = ()  => {
  return async (dispatch: Dispatch<TracksAction>) => {
    try {
      console.log("in fetchTracks")
      const tracks = await axios.get(`http://localhost:4000/api/song`);
      console.log("tracks: ", tracks)
      dispatch( { type: TrackActionsType.FETCH_TRACKS, payload: tracks.data } )
    } catch (e) {
      console.log(e)
      dispatch( { type: TrackActionsType.FETCH_TRACKS_ERROR, payload: "Сталася помилка" } )
    }
  }
}
