import "./general.css"
import Typewriter from "typewriter-effect";
import { aboutme } from "./aboutme";
import { contactme } from "./contactme";
import { myproject } from "./myproject";
export default function General({setdata , setclose}){
  
    const ap = [
      { name: "vscode", icon: "/src/assets/desktopimages/icons8-visual-studio-code-2019-48.png" },
      { name: "javascript", icon: "/src/assets/desktopimages/icons8-js-48.png" },
      { name: "blender", icon: "/src/assets/desktopimages/icons8-blender-3d-48.png" },
      { name: "Expo", icon: "src/assets/desktopimages/icons8-expo-50.png" },
      { name: "Matlabs", icon: "src/assets/desktopimages/icons8-matlab-48.png" },
      { name: "git", icon: "src/assets/desktopimages/icons8-git-logo-48.png" },
      { name: "Mongo-Db", icon: "src/assets/desktopimages/icons8-mongo-db-48.png" },
      { name: "github", icon: "src/assets/desktopimages/icons8-github-logo-94.png" },
      { name: "react", icon: "src/assets/desktopimages/icons8-react-40.png" },
      { name: "React-native", icon: "src/assets/desktopimages/icons8-react-native-50.png" }
    ];
    const data =[
      { name: "Myprojects", icon: "📁" },
      { name: "about me", icon: "📁" },
      { name: "Contact me", icon: "📁" }
    ]

     
return(
     <div className="general">
       
     <section className="ico">
     <div className="testt">
      {ap.map((aap , index)=>{
        return(
        <div className="single" key={index} >
            <span className="appimage"><img src={`${aap.icon}`} alt=""  /></span>
            <span>{aap.name}</span>
        </div>
         )
       })}   
      </div>       
        </section> 
        <div className="center">      
        <div className="hello">
         <div>
         Hi  There ! 
        <span className="wave">👋🏻 </span>
          </div> 
        <div> Iam SAMUEL BUSUGULI </div> 
        <div className="fullstack">Full-Stack Developer | Mobile & Desktop App Developer</div>
        </div>
        <Typewriter className="typewriter"
      options={{
        strings: [
`                      <span style="color:red;"> Hi</span>   I'm a passionate software developer focused on building modern, responsive, and scalable applications across the web, mobile, and desktop platforms.

With a strong foundation in JavaScript, React, React Native, Node.js, and modern web technologies, I enjoy transforming ideas into practical digital solutions. `
         
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 1,
        skipAddStyles:true,
        pauseFor:2000
      }}
    />
        </div>
        <div className="last">
        <div className="single" onClick={()=>{
        setclose(true);
        setdata(myproject);
        }}>
            <span className="appimage">{data[0].icon}</span>
            <span>{data[0].name}</span>
        </div>
        <div className="single" onClick={()=>{
        setclose(true);
        setdata(aboutme);
        }}>
            <span className="appimage">{data[1].icon}</span>
            <span>{data[1].name}</span>
        </div>
        <div className="single" onClick={()=>{
        setclose(true);
        setdata(contactme);
        }}>
            <span className="appimage">{data[2].icon}</span>
            <span>{data[2].name}</span>
        </div>
     
        </div>
    </div>
)
}

