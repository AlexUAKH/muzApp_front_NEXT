import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {reducer, RootState} from "./reducers";
import {AnyAction, applyMiddleware, createStore, Store } from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  applyMiddleware(...middleware);
}

const makeStore: MakeStore<Store<RootState>> = (context: Context) => createStore(reducer, bindMiddleware([thunk]));



export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>