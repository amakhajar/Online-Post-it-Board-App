import * as React from 'react';

import { Postit } from "./postit";
import {  useParams } from 'react-router-dom';
import Sidebar from "./sidebar";
import Toolbar from "./toolbar";
import { BoardType } from "../models/BoardType";

import { PostitType } from "../models/PostitType";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { addPostit } from "../state/slices/boardSlice";
type boardProps={
    boards: BoardType[]
}


export default function Board( {boards}:boardProps) { 
  let {boardId}=useParams()
  let {postitId}=useParams()
  
  
  const boardid = parseInt(boardId)

  const dispatch = useDispatch<AppDispatch>(); 

  
  const selectedBoard:BoardType=boards.find((d:BoardType)=>(d.id===parseInt(boardId)))
  const filteredPostits=postitId?[selectedBoard.postits.find((post:PostitType)=>post.id===parseInt(postitId))]:selectedBoard.postits
  const postits=selectedBoard.postits
  const add= ()=>{
    const newPostit:PostitType={
        type:"postit",
        id:5,
        board:boardId,
       title:"test",
    
       text:"context",
       color:"#FFFF",
        visible : true,
     }
        dispatch(addPostit({newPostit,boardid}))

     }
    return (
        <div className="sm:-left-4 lg: left-0">
           
            <Toolbar board={selectedBoard} /> 
            <div className="flex flex-wrap gap-4 flex-wrapspace-x-5 mt-6 ml-10">
   
       {filteredPostits.map((item: any) => (
                   <Postit key={item.id} postit={item}  />
                ))}  
               
       



                
            </div>
          

        </div>
    )
}