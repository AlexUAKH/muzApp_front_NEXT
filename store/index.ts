import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {reducer, RootState} from "./reducers";
import {applyMiddleware, createStore, Store} from "redux";
import thunk from "redux-thunk";

const makeStore: MakeStore<Store<RootState>> = (context: Context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});