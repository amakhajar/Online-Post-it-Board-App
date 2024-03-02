import { io } from "socket.io-client";
import { Action, Dispatch, Middleware } from "@reduxjs/toolkit";
import { store } from "./store";


// on se connecte au serveur
const socket = io();

export const propagateSocketMiddleware: Middleware<Dispatch> =
  () => (next) => (action:Action) => {
 
 socket.emit('my action', {...action})
 const result = next(action) 
  return result
  
    

  };  

  socket.on('my action', (action) => {

 
    store.dispatch({type:action.type, payload: action.payload,meta:false})




     
  });