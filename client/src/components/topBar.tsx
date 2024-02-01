import React = require("react");
import { useParams } from "react-router-dom";

export default function TopBar({ board,newPostit}: any) {
    const test =
    {
        type: "postit",
        board: "1",
        title: "Test ",
        text: "Le test a réussi",
        visible: true,
        color: "#0E0",
      }
      let {id}= useParams();
     function addPostit() {
        const existingBoards=JSON.parse(localStorage.getItem('postits'))
        existingBoards.push(test)
        console.log(id)
    } 
    return (

        <div >
            <div className="navbar bg-yellow-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">{board.title}</a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-circle btn-ghost" onClick={addPostit}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 17h6m-3 3v-6M4.9 4H9c.5 0 .9.4.9.9V9c0 .5-.4.9-.9.9H5a.9.9 0 0 1-.9-.9V5c0-.5.4-.9.9-.9Zm10 0H19c.5 0 .9.4.9.9V9c0 .5-.4.9-.9.9h-4a.9.9 0 0 1-.9-.9V5c0-.5.4-.9.9-.9Zm-10 10H9c.5 0 .9.4.9.9V19c0 .5-.4.9-.9.9H5a.9.9 0 0 1-.9-.9v-4c0-.5.4-.9.9-.9Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}