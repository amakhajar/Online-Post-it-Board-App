import * as React from 'react';
import { Routes, Route, useParams, BrowserRouter, json, createBrowserRouter } from 'react-router-dom';
import Sidebar from './components/sidebar';
import TopBar from './components/topBar';
import { useState,useEffect } from 'react';
import Board from './components/board';
import { BoardType } from './models/BoardType';
import { PostitType } from './models/PostitType';
import TestPage from './components/TestPage';

function ProfilePage() {
  // Get the userId param from the URL.
  let { userId } = useParams();
  // ...
}

export function App() {
   
   
    const data:BoardType[]=[
        {
          type: "board",
          id: "1",
          title: "TIW 8",
          notes: ""},
        {
          type: "board",
          id: "2",
          title: "Courses",
          notes: ""
          
        },
      ]
      const posts:PostitType[]=[
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
      ]
      
    const [boards,setBoards]=useState(data.filter((d)=>(d.type=="board")))
    const [postits,setPostit]=useState(posts)
     
    useEffect(()=>{
        localStorage.setItem('boards',JSON.stringify(boards))
        localStorage.setItem('postits',JSON.stringify(postits))
        console.log(localStorage.getItem('boards'))
        console.log(localStorage.getItem('postits'))
    },[boards,postits])
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Sidebar boards={boards} />,
          children: [
            {
              path: "/board/:boardId",
              element: <Board boards={boards} />,
             
            },
            {
              path: "/board/:boardId/postit/:postitId",
              element: <Board boards={boards} />,
             
            }
          ],
        },
      ]);



  return (
   
    
   
    
   
    <BrowserRouter>
    <Routes>
      <Route path="/sidebar" element={ <Sidebar/>}></Route>
        <Route path="/" element={ <Board boards={boards} postits={postits} /> } />
        <Route path="/test" element={ <TestPage /> } />
        <Route path="/board/:id" element={ <Board boards={boards} /> } />
    </Routes> 
    </BrowserRouter>
  );
}