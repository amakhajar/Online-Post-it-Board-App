import React = require("react");
import { Link, useParams } from "react-router-dom";
import TopBar from "./topBar";
import { Postit } from "./postit";
import Board from "./board";
export default function Sidebar({children,board,id}:any) {
  
    return (
        <div>
           
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <label htmlFor="my-drawer-2" className="btn btn-circle btn-ghost drawer-button lg:hidden">     
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label> 
                  
                     <div className="flex-col drawer-content flex  justify-items-start">
                   
                   {children}
                    
                        
                
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-30 min-h-full bg-green-500 sm:bg-blue-500 text-base-content">
                        {/* Sidebar content here */}
                        {board.map((item:any)=>(
                     <li key={item.id}><Link to={`/board/${item.id}`}><a>{item.title}</a></Link></li>
                        ))}
                       
                    </ul>

                </div>
            </div> 
             
        </div>
    )
}