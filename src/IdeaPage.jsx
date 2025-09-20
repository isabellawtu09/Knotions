
import React, {useState, useEffect} from 'react';
import { Helix } from 'ldrs/react'
import 'ldrs/react/Helix.css'

import PlushIsReady from './PlushList.jsx'

export default function IdeaPage(){

const [loadPage , setLoadPage] = useState(false);

const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);



return(
// on click button , render the createplush component
<>
    { !loadPage ?
    (<div className = "flex flex-col items-center text-5xl pt-20 font-[Fredoka]">
        <h1 className = "pt-20">Ready to get your yarn on?</h1>
        <button onClick = {() => {
    setCounter(0);      // 👈 Reset counter to 0
    setLoadPage(true);  // Then show the loading page
  }}className = "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-4xl px-5 py-2.5 text-center me-2 mb-2 mt-10">Start!</button>
    </div>

    ) : (
        counter < 10 ? (
            <div className = "pt-10">
                <h2 className="text-center text-4xl pt-20 font-[Fredoka]">Creating your newest pal...</h2>
                <div className="flex justify-center items-center h-[60vh]"> <Helix size="250" speed="2.5" color="purple" /> </div>
            </div>
        ) : (
            <div className = "pt-10 justify-items-center">
                <h2 className="text-center text-5xl pt-20 font-[Fredoka]">Your pal is ready!</h2>
                <PlushIsReady/>
                <button  onClick = {() => {
                    setLoadPage(false);
                    setCounter(0);
                }} className = "mt-20 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-4xl px-5 py-2.5 text-center me-2 mb-2 "> Restart</button> 
            </div>
        )
    )}
</>
);

}