import { Action, Dispatch, Middleware, MiddlewareAPI, configureStore } from "@reduxjs/toolkit";
import boardReducer from "./slices/boardSlice";
import { propagateSocketMiddleware } from "./propagateSocketMiddleware";
import {createStateSyncMiddleware, initMessageListener} from "redux-state-sync";

const loggerMiddleware:Middleware= (api: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    console.log('Dispatching action:', action)

    // Call the next middleware in the chain
    const result = next(action)

    console.log('State after action:', api.getState())

    return result
}

export const store=configureStore({
    reducer:{
       board: boardReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createStateSyncMiddleware({})),
})




initMessageListener(store);
export type Rootstate= ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
