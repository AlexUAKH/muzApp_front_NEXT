export interface IComment {
  _id: string;
  created_at: number;
  updated_at: number;
  username: string;
  text: string;
}

export interface ITrack {
  _id: string;
  title: string;
  artist: string;
  text: string | null;
  listenings: number;
  picture: string;
  audio: string;
  comments: IComment[];
}

export interface TrackState {
  tracks: ITrack[],
  error: string
}

export enum TrackActionsType {
  FETCH_TRACKS = "FETCH_TRACKS",
  FETCH_TRACKS_ERROR = "FETCH_TRACKS_ERROR"
}

interface FetchTracksAction {
  type: TrackActionsType.FETCH_TRACKS,
  payload: ITrack[]
}

interface FetchTracksErrorAction {
  type: TrackActionsType.FETCH_TRACKS_ERROR,
  payload: string
}

export type TracksAction = FetchTracksAction | FetchTracksErrorAction;