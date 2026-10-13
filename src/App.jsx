import { React,useState } from "react";
// import { createRoot } from "react-dom/client"
import Taskbar from "./components/Taskbar";
import StartMenu from "./components/window";
import Heading from "./components/heading";
import Middle from "./components/middle";
import mimi from "@webwithsam/autoimagechanger"


import "./App.css";


export default function App() {
  const [startmenu , setstartmenu] = useState(false)
 const image = mimi({
  Mainpath:"./samples/",
  array:["0.jpg","1.jpg","2.jpg","3.jpg"]
 });
  return (
 <main className="desktop" style={{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${image})`}}>
     <Heading/>
    <Middle/>
    {startmenu&&<StartMenu/>}
    <Taskbar startmanu={setstartmenu}></Taskbar> 
    </main>
  );
}
  
