import { useState } from 'react'

import General from './general'
import "./contactme.css"
import "./middle.css"
import "./aboutme.css"
import "./myproject.css"


function Middle() {
const[close,setclose] = useState(false)
const[data,setdata]=useState()
  return (
    <div className='middle'>
    <General setdata={setdata} setclose={setclose}></General>
    {close&&<div className="mydata">
    { <div className="closebtn" onClick={()=>{   
    setclose(false);
    setdata();
     }}>x</div>}
        {data}
        </div>}
    </div>
     
  )
}

export default Middle