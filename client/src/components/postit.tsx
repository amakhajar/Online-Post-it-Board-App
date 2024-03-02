import * as React from 'react';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { deletePostit, editPostit, hidePostit, likePostit } from "../state/slices/boardSlice";
import { PostitType } from "../models/PostitType";
import { useNavigate, useParams } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

type postitProps = {
    postit: PostitType,
    total: number
}

export function Postit({postit, total}:postitProps ) {

    const { boardId } = useParams()
    const { postitId } = useParams()
    const boardid = parseInt(boardId)
    const postitid = postit.id
    const dispatch = useDispatch<AppDispatch>()
    const visibility: boolean = postit.visible
    const isLiked: boolean = postit.liked
    
  const handle = useFullScreenHandle();

    const navigate = useNavigate()
    const showBottomNavigation = postitId !== undefined;
    const [title, setTitle] = React.useState(postit.title)
    const deleteClick = () => {


        dispatch(deletePostit({ postitid, boardid }))


    }
    const nextClick = () => {
        console.log(total)
        navigate(`/board/${boardId}/postit/${postitid + 1}`)


    }
    const previousClick = () => {

        navigate(`/board/${boardId}/postit/${postitid - 1}`)



    }
    const edit = () => {

        dispatch(editPostit({ postitid, boardid, title }))



    }
    //    window.addEventListener("DOMContentLoaded", (event) => { 


    //    nextBtn.addEventListener("click",(e:MouseEvent)=>{
    //     e.preventDefault()
    //     if (postitid !==  total ) {
    //         navigate(`/board/${boardId}/postit/${postitid + 1}`)
    //         console.log('next clicked')
    //     }else{
    //         this.disabled=true;
    //     }
    //    });})


    return (

        <>
        <FullScreen handle={handle}>
        <div className="card h-fit  md:-left-2  sm: -left-7 shadow-lg  sm:w-72 lg:w-160 my-4 mx-4" style={{ backgroundColor: postit.color }} >
            <div className='h-10 w-72 bg-gray-800 rounded-t-lg'>


                <div className="card-actions justify-end my-2 mr-2 ">
                    <button onClick={edit}>
                        <svg className="w-[22px] h-[22px] text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="m10.8 17.8-6.4 2.1 2.1-6.4m4.3 4.3L19 9a3 3 0 0 0-4-4l-8.4 8.6m4.3 4.3-4.3-4.3m2.1 2.1L15 9.1m-2.1-2 4.2 4.2" />
                        </svg>
                    </button>

                    <button onClick={handle.enter}>
                        <svg className="w-5 h-5 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5" />
                        </svg>
                    </button>
                    
                    <button onClick={() => deleteClick()}>
                        <svg className="w-[20px] h-[20px] text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                        </svg>
                    </button>
                </div></div>
            <div className={`card-body h-fit w-72  ${postit.visible ? 'opacity-100' : 'opacity-10'}`}>

                <div className="flex flex-row  ">
                    <input type="text" id={postitid.toString()} value={title} style={{ backgroundColor: postit.color }} onChange={(event) => setTitle(event.target.value)} className='font-semibold text-lg'/>
                </div>
                <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>


                <article className="break-all text-wrap ">
                    <p className=" w-full  resize-none overflow-hidden text-wrap max-h-12 line-clamp-2 " >
                    {postit.text}                    </p>
                </article>

                <div className="card-actions justify-start mt-2">
                    <button onClick={() => dispatch(hidePostit({ postitid, boardid }))} className="mr-0">
                        {!visibility ?
                            <svg className="w-4 h-4 text-gray-500 dark:text-white  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z" />
                                <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg> : <svg className="w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 14c-.5-.6-.9-1.3-1-2 0-1 4-6 9-6m7.6 3.8A5 5 0 0 1 21 12c0 1-3 6-9 6h-1m-6 1L19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>}
                    </button>
                    <button onClick={() => dispatch(likePostit({ postitid, boardid }))}>
                        {!isLiked ? <svg className="w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                        </svg> : <svg className="w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#b91c1c" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                        </svg>}
                    </button>


                </div>
            </div>
        </div>
            {isMobile && showBottomNavigation && postitid && <div className="join grid grid-cols-2 ml-12 my-8 w-40">
                <button id="previousBtn" className="join-item btn btn-outline" disabled={postitid == 1 ? true : false} onClick={previousClick}>Previous </button>
                <button id="nextBtn" className="join-item btn btn-outline" disabled={postitid == total ? true : false} onClick={nextClick}>Next</button>
            </div>}
            
        
      </FullScreen>
            {/* <dialog id="my_modal_1" className="modal">
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
            
          </form>

          <div className="modal-action flex justify-end">
            <form method="dialog">
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " onClick={add}>Add</button>
              <button type="submit" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:mr-11 " >Cancel</button>
            </form>
          </div>
        </div>
      </dialog> */}

        </>




    )
}