import * as React from 'react';
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img6 from "../../images/img6.png";
import img7 from "../../images/img7.png";

export  function Content()  {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 bg-gradient-to-l from-emerald-800 to-emerald-900 " >
      
            <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img
                alt="gallery"
              className=" transform transition duration-500 
              hover:scale-105 block h-full w-full rounded-lg object-cover object-center border-4 border-yellow-900"
              src={img6} />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="  transform transition duration-500  border-4 border-yellow-900
              hover:scale-105  block h-full w-full rounded-lg object-cover object-center shadow-xl"
              src={img7} />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="   transform transition duration-500 
              hover:scale-105 border-4 border-yellow-900 block h-full w-full rounded-lg object-cover object-center shadow-xl"
              src={img2} />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="  border-4 border-yellow-900 transform transition duration-500 
              hover:scale-105 block h-full w-full rounded-lg object-cover object-center shadow-xl"
              src={img1} />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="   border-4 border-yellow-900 transform transition duration-500 
              hover:scale-105 block h-full w-full rounded-lg object-cover object-center shadow-xl"
              src={img4}/>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="  border-4 border-yellow-900 transform transition duration-500 
              hover:scale-105 block h-full w-full rounded-lg object-cover object-center shadow-xls"
              src={img3}/>
          </div>
        </div>
      </div>
    </div>
    );
}


     


