import * as React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";
import Sidebar from './components/sidebar';
import TopBar from './components/topBar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { App } from './app';
export function Index () {

  
  return (
    <div>
     <App/>
   
  </div>
  
  );
};
const root=createRoot(document.getElementById("root"));
root.render(<Index />);
