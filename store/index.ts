import { legacy_createStore as createStore} from 'redux'
import {createWrapper, MakeStore} from "next-redux-wrapper";
import {reducer, RootState} from "./reducers";
import {applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log("middle ware added")
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  applyMiddleware(...middleware);
}

const makeStore: MakeStore<Store<RootState>> = () => createStore(reducer, bindMiddleware([thunk]));

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

// export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>