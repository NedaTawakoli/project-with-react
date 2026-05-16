import { useEffect, useState } from "react";

function Q11(){
    const[value,setValue]=useState("");
    const [shomarish,setShomarish]=useState(0);
    useEffect(()=>{
        setShomarish((prev)=>value.length);
    },[value]);
    return(
        <div style={{width:"100%",display:"flex",textAlign:"center",gap:"20px",margin:"0px auto"}}>
            <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Enter some text" style={{padding:"10px 50px",margin:"0 auto",outline:"0",border:"1px solid orange", borderRadius:"8px",color:"orange"}} />
            <h1 style={{color:"orange",margin:"0 auto",fontSize:"30px",textAlign:"center"}}> You entered {shomarish} chars</h1>
        </div>
    )
}
export default Q11;