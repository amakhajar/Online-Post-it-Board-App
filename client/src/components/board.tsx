import * as React from 'react';

import { Postit } from "./postit";
import { useParams } from 'react-router-dom';

import Toolbar from "./toolbar";
import { BoardType } from "../models/BoardType";

import { PostitType } from "../models/PostitType";
import {   Rootstate } from '../state/store';
import {   useSelector } from 'react-redux';



export default function Board() {
    const { boardId } = useParams()
    const { postitId } = useParams()
   
 
    const boards = useSelector((state: Rootstate) => state.board.value.find((d: BoardType) => (d.id === parseInt(boardId))))
    
   


    const filteredPostits = postitId!=null? [boards.postits.find((post: PostitType) => post.id === parseInt(postitId))] : boards.postits

    return (
        <div >
            <Toolbar board={boards} />
            <div className="flex flex-wrap gap-4 flex-wrapspace-x-5 mt-6 ml-10">

                {filteredPostits.map((item: PostitType) => (
                 
                    <Postit  key={item.id} postit={item} total={boards.postits.length}/>
                    
                ))}
        </div>
        
        </div>
    )
}