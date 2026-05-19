import { useState } from "react";

function Q16(){
 const [value,setValue] = useState(0);
    return(
        <div style={{width:"100%",display:"flex",justifyContent:"space-between",margin:"30px 0",padding:"10px 30px"}}>
          <button onClick={()=>setValue(value+1)}>افزایش دهنده</button>
          <h1>{value}</h1>
          <button onClick={()=>setValue(value-1)}>کاهش دهنده</button>
        </div>
    )
}
export default Q16;