import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import Board from './components/Board';
import "./style.css";

import Postit from './components/Postit';
import Toolbar from './components/Toolbar';
export function Index () {
  const [filterBoard,setFilterBoard]=useState();
  const data=[
    {
      type: "board",
      id: "1",
      title: "TIW 8",
      notes: "",
      postits:[
        {
          type: "postit",
          board: "1",
          title: "TP 1",
          text: "Le TP porte sur des rappels de developpement Web",
          visible: false,
          color: "#CCC",
        },
        {
          type: "postit",
          board: "1",
          title: "TP 2",
          text: "Le TP porte sur la creation d'un outil de presentation HTML",
          visible: true,
          color: "#00E",
        },
        {
          type: "postit",
          board: "1",
          title: "TP 3",
          text: "Le TP 3",
          visible: true,
          color: "#00E",
        },
        {
          type: "postit",
          board: "1",
          title: "TP 4",
          text: "Le TP 4",
          visible: true,
          color: "#0E0",
        },
      ]},
    {
      type: "board",
      board: "2",
      title: "Courses",
      notes: "",
     
    }];
   
  const postits=data[0].postits
  return (
    <div>
  <Toolbar  />
  <div className="h-60 grid grid-cols-3 gap-4 content-center ">
  {postits.map((data,index)=>(
 
  <Postit key={index} title={index+". "+data.title} text={data.text} color={data.color} />

  ))

  }
  </div>
  </div>
  );
};
const root=createRoot(document.getElementById("root"));
root.render(<Index />);
