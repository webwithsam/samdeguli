import { useEffect, useState } from "react";
import "./Taskbar.css";


export default function Taskbar({startmanu}) {
  
  const [now, setNow] = useState(new Date());
  const [test, settest] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);

  }, []);

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const date = now.toLocaleDateString([], {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <footer className="taskbar">
      <div className="taskbar-left">
      <div className="windowlogo position" onClick={()=>
        {
          if(test){startmanu(true);settest(false)}
          else{startmanu(false);settest(true)}
        }
                                   }>
      <img src="./src/assets/images/icons8-windows-10-48.png" />
       </div>
      <div className="searchog">
        <div className="search">
         <input className="input" type ="text" placeholder="nothing work"></input>
         <span className="ss">
         <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '20px', height: '20px' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z" />
        </svg>
        </span>
       
        </div>
      </div>
      <div className="taskview position">
        <img src="../src/assets/images/icons8-task-view-48.png" alt=""  />
      </div>
      <div className="facebook position">
      <a href="https://www.facebook.com/samuel.busuguli" target="_blank" >
      <img src="./src/assets/images/icons8-facebook-logo-94.png" alt="" />
      </a>
      </div>
        <div className="github position">
      <a href="https://github.com/webwithsam" target="_blank" >
      <img src="src/assets/images/icons8-github-94.png" alt="" />
      </a>
      </div>
        <div className="instagram position">
      <a href="https://www.instagram.com/samuel_busuguli?stkn=MWN4N3dpYm1iZXY4aw==" target="_blank" >
      <img src="src/assets/images/icons8-instagram-logo-94.png" alt="" />
      </a>
      </div>
        <div className="linkedin position">
      <a href="https://linkedin.com/in/sam-busuguli-a7a3a92a6" target="_blank" >
      <img src="src/assets/images/icons8-linkedin-logo-48.png" alt="" />
      </a>
      </div>  
        <div className="whatsapp position">
      <a href="https://wa.me/2550742153438" target="_blank" >
      <img src="\src\assets\images\icons8-whatsapp-logo-94.png" alt="" />
      </a>
      </div>
      </div>

      <div className="taskbar-right">
           <div className="show-hidden-icons"><div>^</div></div>
           <div className="eng"><div>ENG</div><div>US</div></div>
           <div className="some">
           <img src="src/assets/images/icons8-wifi-24.png" alt="" />
           <img src="src/assets/images/icons8-speaker-26.png" alt=""  />
           </div>
           <div className="clock">
           <div className="theclock">
          <div style={{marginLeft:"auto"}}>{time}</div>
          <div>{date}</div> 
           </div>
           <img src="src/assets/images/icons8-notification-48.png" alt=""  />
            </div>

       
      </div>

    </footer>
  );
}
