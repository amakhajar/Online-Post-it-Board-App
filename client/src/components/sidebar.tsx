import * as React from 'react';
import {  useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, Rootstate } from '../state/store';
import { addBoard, setBoard } from '../state/slices/boardSlice';
import { BoardType } from '../models/BoardType';
import { Outlet } from "react-router-dom";
import { useRef } from 'react';
const sidebar = () => {
    const boards = useSelector((state: Rootstate) => state.board.value)
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();
    const titleRef=useRef(null);
    const notesRef=useRef(null);

    const changeBoard = (i:number) => {
      
      
        
        dispatch(setBoard(i));
       navigate(`/board/${i}`);
      
        
      }
    const add = () => {
      
      const notes=notesRef.current.value ;
      const title=titleRef.current.value;
      
      dispatch(addBoard({ title, notes }));
      titleRef.current.value='';
      notesRef.current.value='';
     
    
      
    }

    return (
        <div>

            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <label htmlFor="my-drawer-2" className="btn btn-circle btn-ghost drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>

                <div className="flex-col drawer-content flex  justify-items-center">

                    <Outlet />



                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul id='list' className="menu p-4 w-30 min-h-full bg-gray-900 text-base-content top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center">
                        {/* Sidebar content here */}<div className="text-gray-100 text-xl">
                            <div className="p-2.5 mt-1 flex items-center">

                                <svg className="w-6 h-6 text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 14h-2.7L11 20.3l-.9.7H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1ZM6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.1 7.9l-3.5-3.5a1 1 0 0 0-1.4 0L12 6.5v10l7.1-7.2a1 1 0 0 0 0-1.4Z" />
                                </svg>


                                <h1 className="font-bold text-gray-200 text-[16px] ml-3" onClick={()=>navigate('/')}>My Courses</h1>
                                <button className="ml-24" onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement).showModal()}>
                                    <svg className="w-6 h-6 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                                    </svg>
                                </button>
                            </div>
                            <div className="my-2 bg-gray-600 h-[1px]"></div>
                        </div>

                        {boards.map((item: BoardType) => (
                            <li key={item.id}><button onClick={()=>changeBoard(item.id)}>
                                <i className="w-1 h-1 bg-gray-200 rounded-full">
                                </i>
                                <div onClick={() => { document.getElementById('my-drawer-2').click() }} className="text-[15px] ml-4 text-gray-200 font-bold">
                                    {item.title}
                                </div>
                            </button>
                            </li>

                        ))}

                    </ul>

                </div>
            </div>

            <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-96 h-auto">
          <h3 className="px-2 font-bold text-lg">New Board </h3>
         


          <form className="max-w-sm mx-auto">

<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input ref={titleRef} id="title" name="title" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-800 text-gray-900 focus:outline-none focus:border-indigo-600" placeholder='Title'  />
							<label htmlFor="title" className="absolute left-0 -top-3.5 text-gray-800 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm">Title</label>
						</div>
            <br />
						<div className="relative">
							<input ref={notesRef} id="notes" name="notes" type="text" className="peer  placeholder-transparent h-10 w-full border-b-2 border-gray-800 text-gray-900 focus:outline-none focus:border-indigo-600" placeholder='Notes' />
							<label htmlFor="notes" className="absolute left-0 -top-3.5 text-gray-800 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm">Notes</label>
						</div>
					
					</div>
				</div>


        
          </form>

          <div className="modal-action flex justify-end">
            <form method="dialog">
              <button type="submit" className="text-slate-100 bg-slate-300 hover:bg-slate-500  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:mr-11 sm:mr-3 " >Cancel</button>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " onClick={add}>Add</button>
            </form>
          </div>
        </div>
      </dialog>
        </div>
        
    )
}
export default sidebar;