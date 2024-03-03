import {  configureStore } from "@reduxjs/toolkit";
import boardReducer from "./slices/boardSlice";
import { propagateSocketMiddleware } from "./Middleware/propagateSocketMiddleware";
import {createStateSyncMiddleware, initMessageListener} from "redux-state-sync";


export const store=configureStore({
    reducer:{
       board: boardReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(propagateSocketMiddleware),
})




initMessageListener(store);
export type Rootstate= ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
