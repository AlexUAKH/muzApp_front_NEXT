import {TrackActionsType, TracksAction, TrackState} from "../../types/track";

const initialState: TrackState = {
  tracks: [],
  error: ''
}

export const tracksReducer = (state: TrackState = initialState, action: TracksAction): TrackState => {
  switch (action.type) {
    case TrackActionsType.FETCH_TRACKS:
      return { error: '', tracks: action.payload }
    case TrackActionsType.FETCH_TRACKS_ERROR:
      return { ...state, error: action.payload }
    default:
      return state;
  }
}