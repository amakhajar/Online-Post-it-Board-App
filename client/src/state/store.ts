import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./slices/boardSlice";

export const store=configureStore({
    reducer:{
       board: boardReducer,
    }
})

export type Rootstate= ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;