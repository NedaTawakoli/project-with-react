import { useState } from "react";

function Q17(){
    const [qimat,setQimat] = useState("");
    return(
        <div style={{width:"100%",padding:"20px 40px",display:"flex",justifyContent:"space-between"}}>
            <h1 style={{border:"1px solid",padding:"15px"}}>{qimat}</h1>
            <input style={{padding:"10px 0"}} value={qimat} onChange={(e)=>setQimat(e.target.value)} type="text" />
        </div>
    )
}
export default Q17;