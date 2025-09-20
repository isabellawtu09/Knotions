

// import { Canvas } from "@react-three/fiber";
import { Suspense , useState} from "react";
// import { CameraControls, PerspectiveCamera , Environment, OrbitControls, ContactShadows} from "@react-three/drei";
// import Chillcat from '../public/Chillcat.jsx';
import IdeaPage from './IdeaPage.jsx';
import DocPage from "./DocPage.jsx";
import { FaLightbulb } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

import './App.css'

function App() {

  // make everything in canvas it own component , only render it if ideaPage and Docpage are false
  // else whichever button was clicked , render that component page


  const [currPage, setCurrPage] = useState("model");


  return (
    <>

     <header className="w-full shadow-lg h-32 bg-purple-50 text-gray-900 p-4 flex items-center relative">
            <button onClick = { () => setCurrPage("ideaPage")}className="text-yellow-400 text-5xl absolute left-8"><FaLightbulb /></button>
            <div className="flex flex-col items-center mx-auto">
                <button onClick = { () => setCurrPage("model")}><h1 className="font-[Schoolbell] text-6xl tracking-widest">Knotions</h1></button>
                <p className="pt-2 font-[Schoolbell] text-2xl"><span className = "font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-800 inline-block text-transparent bg-clip-text" >Knot</span> your average characters!</p>
            </div>
            <button onClick = { () => setCurrPage("docPage")} className = "text-blue-700 text-5xl absolute right-8"><FaBook/></button>
        </header>

    { currPage === "model" ?
    <div className = "justify-items-center">

        <div className="flex flex-col items-center pt-20">
            <h2 className="text-4xl font-[Fredoka] text-purple-600 mb-4">3D Model Coming Soon!</h2>
            <p className="text-xl text-gray-600">The 3D viewer is temporarily disabled for testing.</p>
            <p className="text-lg text-gray-500 mt-4">Try the Idea Generator instead! 💡</p>
        </div>
     </div>
     : ( currPage === "ideaPage" ? <IdeaPage/> : <DocPage/> )}
    </>

  );

}

export default App
