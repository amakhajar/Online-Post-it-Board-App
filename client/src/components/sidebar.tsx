import * as React from 'react';
import { Link, useParams } from "react-router-dom";
import TopBar from "./toolbar";
import { Postit } from "./postit";
import Board from "./board";
export default function Sidebar({ children, boards }: any) {

    return (
        <div>

            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <label htmlFor="my-drawer-2" className="btn btn-circle btn-ghost drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>

                <div className="flex-col drawer-content flex  justify-items-center">

                    {children}



                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-30 min-h-full bg-gray-900 text-base-content top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center">
                        {/* Sidebar content here */}<div className="text-gray-100 text-xl">
                            <div className="p-2.5 mt-1 flex items-center">

                                <svg className="w-6 h-6 text-blue-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 14h-2.7L11 20.3l-.9.7H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM9 3H4a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V4a1 1 0 0 0-1-1ZM6.5 18.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM19.1 7.9l-3.5-3.5a1 1 0 0 0-1.4 0L12 6.5v10l7.1-7.2a1 1 0 0 0 0-1.4Z" />
                                </svg>


                                <h1 className="font-bold text-gray-200 text-[16px] ml-3">My Courses</h1>
                                <button className="ml-24">
                                    <svg className="w-6 h-6 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                                    </svg>
                                </button>
                            </div>
                            <div className="my-2 bg-gray-600 h-[1px]"></div>
                        </div>

                        {boards.map((item: any) => (



                            <li key={item.id}><Link to={`/board/${item.id}`}>
                                <i className="w-1 h-1 bg-gray-200 rounded-full">
                                </i>
                                <div onClick={() => { document.getElementById('my-drawer-2').click() }} className="text-[15px] ml-4 text-gray-200 font-bold">
                                    {item.title}</div></Link></li>
                        ))}

                    </ul>

                </div>
            </div>

        </div>
    )
}