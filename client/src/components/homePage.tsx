import * as React from 'react';

export default function HomePage(){
    return(
<div className="hero min-h-screen -left-16">
  <div className="hero-content text-center -left-16 ">
    <div className="max-w-md md:-left-2  sm:-left-16">
      <h1 className="text-5xl font-bold">Hello there
      <button className="animate-waving-hand" disabled>👋🏻</button>
      </h1>
      <h3 className="py-6 text-wrap">Welcome to your digital Post-it board.
      <p><b>THE</b> place where all your classes' notes live.</p></h3>
      <h5 style={{display: "flex", justifyContent: "center"}}>
      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h2v5m-2 0h4m-2.6-8.5h0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
       <span> To get started select an existing board from the left sidebar</span>
      </h5>

    </div>
  </div>
</div>
    )
}