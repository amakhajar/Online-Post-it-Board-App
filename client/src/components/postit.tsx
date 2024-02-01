import React = require("react");

export function Postit({ postit,deletePostit}: any) {
    function removePostit() {
        const existingBoards=JSON.parse(localStorage.getItem('postits'))
        existingBoards.pop(postit)
        deletePostit(existingBoards)
    } 
    
    return (
        
            <div className="card w-96 bg-base-100 shadow-lg w-32 md:w-72 lg:w-96 h-fit">
                <div className="card-body h-fit">
                    <h2 className="card-title">{postit.title}</h2>
                    <p>{postit.text}</p>
                    <div className="card-actions justify-end">
                        <button >
                        <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                        </svg>
                        </button>
                        <button onClick={removePostit}>
                        <svg className="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>



        
    )
}