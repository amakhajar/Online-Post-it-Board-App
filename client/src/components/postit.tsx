import React = require("react");
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { deletePostit, hidePostit, likePostit } from "../state/slices/boardSlice";
import { PostitType } from "../models/PostitType";
import { useParams } from "react-router-dom";

interface postitProps{
    postit: PostitType
}

export function Postit({ postit }: postitProps) {
    let { boardId } = useParams()
    const boardid = parseInt(boardId)
    const postitid = postit.id
    const visibility:boolean=postit.visible
    const isLiked:boolean=postit.liked

    const dispatch = useDispatch<AppDispatch>();
    return (

        <div className="card h-fit  -left-4  shadow-lg  md:w-72 lg:w-160 " style={{ backgroundColor: postit.color }}>
            <div className={`card-body h-fit  ${postit.visible ? 'opacity-100' : 'opacity-10'}`}>
                <div className="card-actions justify-end">
                    <svg className="w-[22px] h-[22px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="m10.8 17.8-6.4 2.1 2.1-6.4m4.3 4.3L19 9a3 3 0 0 0-4-4l-8.4 8.6m4.3 4.3-4.3-4.3m2.1 2.1L15 9.1m-2.1-2 4.2 4.2" />
                    </svg>
                </div>
                <div className="flex flex-row ">
                    <h2 className="card-title">{postit.title}</h2>
                </div>



                <article className="break-all"><p>{postit.text}</p></article>

                <div className="card-actions justify-end">
                  <button onClick={() => dispatch(hidePostit({ postitid, boardid }))} className="mr-0">
                     { !visibility?   
                            <svg className="w-6 h-6 text-gray-800 dark:text-white  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z" />
                                <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>:<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14c-.5-.6-.9-1.3-1-2 0-1 4-6 9-6m7.6 3.8A5 5 0 0 1 21 12c0 1-3 6-9 6h-1m-6 1L19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>}
                    </button>
                    <button onClick={() => dispatch(likePostit({ postitid, boardid }))} >
                       {!isLiked? <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                        </svg>:<svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#b91c1c" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                        </svg>}
                    </button>

                    <button onClick={() => dispatch(deletePostit({ postitid, boardid }))}>
                        <svg className="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>




    )
}