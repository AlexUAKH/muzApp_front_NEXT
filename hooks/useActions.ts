import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from "../store/action-creators";

export const useActuons = () => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionCreators, dispatch)
}