import React = require("react");
import TopBar from "./topBar";
import { Postit } from "./postit";
import {  useParams } from 'react-router-dom';
import Sidebar from "./sidebar";

export default function Board({ boards, postits}: any) { 
   let {id}=useParams()
    return (
        <div>
           <Sidebar board={boards} id={id}>
            <TopBar board={boards} /> 
            <div className="flex flex-wrap gap-4 flex-wrapspace-x-5 mt-6 ml-10">

                {postits.map((item: any) => (
                    <Postit postit={item}  />
                ))}
            </div>
            </Sidebar>
            
            

        </div>
    )
}