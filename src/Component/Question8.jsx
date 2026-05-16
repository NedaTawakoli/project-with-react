import { useEffect, useState } from "react";

function Q8(){
 const [number,setNumber] = useState(0);
 useEffect(()=>{
    document.title = "The number is " + number;
 },[number]);
    return(
      <div style={{width:"45%",margin:"25px 25pc",borderRadius:"8pc",color:"orange",justifyContent:"center",border:"1px solid orange",}}>
        <h1 style={{textAlign:"center"}}>Change The Title</h1>
         <button style={{padding:"20px 30px",margin:"30px 15pc",borderRadius:"8px",backgroundColor:"orange",color:"white",border:"0"}} onClick={()=>setNumber(number +1)}>Click Me</button>
      </div>
    )
}
export default Q8;