import {PlayerAction, PlayerActionTypes} from "../../types/player";
import {ITrack} from "../../types/track";

export const plsyTarck = (): PlayerAction => {
  return {type: PlayerActionTypes.PLAY}
}
export const pauseTarck = (): PlayerAction => {
  return {type: PlayerActionTypes.PAUSE}
}
export const setDuration = (payload: number): PlayerAction => {
  return {type: PlayerActionTypes.SET_DURATION, payload}
}
export const setVolume = (payload: number): PlayerAction => {
  return {type: PlayerActionTypes.SET_VOLUME, payload}
}
export const setCurentTime = (payload: number): PlayerAction => {
  return {type: PlayerActionTypes.SET_CURRENT_TIME, payload}
}
export const setActive = (payload: ITrack): PlayerAction => {
  return {type: PlayerActionTypes.SET_ACTIVE, payload}
}