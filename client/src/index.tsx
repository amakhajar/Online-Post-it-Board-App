import * as React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";
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
