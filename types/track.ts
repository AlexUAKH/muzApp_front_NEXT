export interface IComment {
  _id: string;
  created_at: number;
  updated_at: number;
  username: number;
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

