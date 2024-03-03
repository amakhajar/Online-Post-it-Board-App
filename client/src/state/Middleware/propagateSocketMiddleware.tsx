import { io } from "socket.io-client";
import {  AnyAction, Dispatch, Middleware } from "@reduxjs/toolkit";
import { store } from "../store";


// on se connecte au serveur
const socket = io();

export const propagateSocketMiddleware: Middleware<Dispatch> =
() => {
  socket.on('my action', (msg) => {
    console.log("dispatch action", msg);
    store.dispatch(msg);
  });

  return (next) => (action: AnyAction) => {
    
    console.log("propagateSocketMiddleware", action);
   
  
    if (action.new !== false ) {
      action.new = true;
      socket.emit('my action', action);
    }

   
    return next(action);
  };
}