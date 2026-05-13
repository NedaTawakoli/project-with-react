import { useEffect, useState } from "react";

function Q8(){
 const [number,setNumber] = useState(0);
 useEffect(()=>{
    document.title = "The number is " + number;
 },[number]);
    return(
    <button style={{padding:"20px 30px",margin:"20px 30px",borderRadius:"8px",backgroundColor:"orange",color:"white",border:"0"}} onClick={()=>setNumber(number +1)}>Click Me</button>
    )
}
export default Q8;