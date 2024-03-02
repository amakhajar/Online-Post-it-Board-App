import * as React from 'react';

export default function HomePage(){
    return(
<div className="hero min-h-screen -left-16">
  <div className="hero-content text-center -left-16 ">
    <div className="max-w-md md:-left-2  sm:-left-16">
      <h1 className="text-5xl font-bold">Hello there
      <button className="animate-waving-hand" disabled>👋🏻</button>
      </h1>
      <h5 className="py-6 text-wrap">Welcome to your digital Post-it board. THE place where all your classes' notes live.
      <br />
      To get started select an existing board from the left sidebar
      </h5>

    </div>
  </div>
</div>
    )
}