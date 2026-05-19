import { useState } from "react";

function Q23(){
  const [isDark,setIsDark] = useState(false);
    return(
    <div style={`height:'50vh',width:'100%' ${isDark} backgroundColor:black' :backgroundColor:'white' `}>
        <button onClick={()=>setIsDark(!isDark)}>{isDark?'Light Mode' : 'Dark Mode'}</button>
    </div>
    )
}
export default Q23;