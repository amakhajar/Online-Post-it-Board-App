import * as React from 'react';
import { Routes, Route, useParams, BrowserRouter} from 'react-router-dom';
import Sidebar from './components/sidebar';

import Board from './components/board';

import {useSelector } from 'react-redux';
import { Rootstate } from './state/store';
import HomePage from './components/homePage';


export function App() {
   
 
 const board=useSelector((state:Rootstate) => state.board.value)


  return (
   
    <BrowserRouter>
    
     <Routes>
       <Route path='/' element={<Sidebar  boards={board} children={<HomePage/>}/>}/> 
       <Route path='/board/:boardId' element={ <Sidebar  boards={board} children={<Board boards={board} />}/>} /> 
       <Route path='/board/:boardId/postit/:postitId' element={ <Sidebar  boards={board} children={<Board boards={board} />}/>} /> 
     </Routes>
    </BrowserRouter>
   
   
    
  );
}