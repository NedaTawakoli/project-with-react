import { useEffect, useState } from "react";

function Q22(){
    const[size,setSize] = useState(0);
    useEffect(()=>{
        function getSize(){
            setSize(window.innerWidth);
        }
        window.onresize = getSize;
    },[size]);
    return(
  <div style={{padding:"20px 30px"}}>
    <h1>The width of screen {size}</h1>
  </div>
    )
}
export default Q22;