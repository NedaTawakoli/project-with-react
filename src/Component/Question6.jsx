import { useEffect, useState } from "react";

function Q6(){
    const [second,setSecond] = useState(0);
    const [running,setRunning] = useState(false);
    useEffect(()=>{
        let interval;
        if(running){
           interval = setInterval(() => {
                setSecond((prev)=>prev+1);
            }, 1000);
        }
           return()=> clearInterval(interval);
    },[running]);
  return(
    <div >
        <h1 style={{textAlign:"center",margin:"20px 0",color:"purple"}}>{second}</h1>
        <div style={{width:"100%",display:"flex",gap:"8px"}}>
        <button onClick={()=>setRunning(true)} style={{padding:"10px 15px",borderRadius:"8px",color:"white",margin:"10px auto", backgroundColor:"red"}}>Start</button>
        <button onClick={()=>setRunning(false)} style={{padding:"10px 15px",borderRadius:"8px",color:"white",margin:"10px auto", backgroundColor:"purple"}}>Stop</button>
        </div>
    </div>
  )
}
export default Q6;