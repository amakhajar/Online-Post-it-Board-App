import * as React from 'react';
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, Rootstate } from "../state/store";
import { PostitType } from "../models/PostitType";
import { addPostit } from "../state/slices/boardSlice";
import { BoardType } from "../models/BoardType";

type toolbarProps={
 board:BoardType
}
export default function Toolbar({ board }: toolbarProps) {

  const { boardId } = useParams()
  const boardid = parseInt(boardId)

  
//   const current = useSelector((state: Rootstate) => state.board.currentBoard)

  const dispatch = useDispatch<AppDispatch>();
  const add = () => {
    const newPostit: PostitType = {
      type: "postit",
      id: board.postits.length + 1,
      board: boardId,
      title: (document.getElementById("title") as HTMLInputElement).value,

      text: (document.getElementById("Content") as HTMLInputElement).value,
      color: (document.getElementById("color") as HTMLInputElement).value,
      visible: true,
    }
    dispatch(addPostit({ newPostit, boardid }));
    (document.getElementById("title") as HTMLInputElement).value = '';
    (document.getElementById("Content") as HTMLInputElement).value = '';
    (document.getElementById("color") as HTMLInputElement).value = '';
  }
  const likedPostits = useSelector((state: Rootstate) => state.board.likedPostits)
 // const boards = useSelector((state: Rootstate) => state.board.value) 



  return (

    <div >
      <div className="navbar  ">
        <div className="flex-1">
          <h2 className="leading-loose font-serif uppercase ml-7 text-xl">{board.title}</h2>
        </div>
        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" >
          {!likedPostits.length ?
                         <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                     </svg> : <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#b91c1c" viewBox="0 0 24 24">
              <path d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z" />
            </svg>
          }
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2  bg-slate-100 rounded-box w-32">
            <i>You liked:</i>
            {
              likedPostits.map((item: PostitType) => (
                <li key={item.id}>
                  <Link to={`/board/${item.board}/postit/${item.id}`}><div>{item.title}</div></Link>


                </li>))}

          </ul>
        </div>

        <div >
          {/* <i>New Postit</i> */}
          <button id="addButton" onClick={() => (document.getElementById('my_modal_1') as HTMLDialogElement).showModal()}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white mx-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 17h6m-3 3v-6M4.9 4H9c.5 0 .9.4.9.9V9c0 .5-.4.9-.9.9H5a.9.9 0 0 1-.9-.9V5c0-.5.4-.9.9-.9Zm10 0H19c.5 0 .9.4.9.9V9c0 .5-.4.9-.9.9h-4a.9.9 0 0 1-.9-.9V5c0-.5.4-.9.9-.9Zm-10 10H9c.5 0 .9.4.9.9V19c0 .5-.4.9-.9.9H5a.9.9 0 0 1-.9-.9v-4c0-.5.4-.9.9-.9Z" />
            </svg>
          </button>
        </div>
      </div>
      <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <i className="ml-7 text-justify text-gray-500 dark:text-gray-400">Notes : {board.notes}</i>

      {/* modal content */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">New Post-It </h3>
          <p className="py-4">Fill in the form to add a new Post-It</p>


          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
              <input type="text" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
              </input>
            </div>
            <div className="mb-5">
              <label htmlFor="Content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
              <textarea id="Content" className="block w-full p-4 text-gray-900 h-40 border resize-none border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-5">
              <label htmlFor="color" className="block text-sm font-medium mb-2 dark:text-white">Color</label>
              <input type="color" id="color" className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700" title="Choose your color" />
            </div>
          </form>

          <div className="modal-action flex justify-end">
            <form method="dialog">
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " onClick={add}>Add</button>
              <button type="submit" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:mr-11 " >Cancel</button>
            </form>
          </div>
        </div>
      </dialog>

    </div>
  )
}