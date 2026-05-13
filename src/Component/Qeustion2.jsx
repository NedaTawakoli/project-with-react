import { useRef } from "react"

function Q2(){
    const inputRaf = useRef(null);
    function handleClick(){
      inputRaf.current.focus();
    }
    return(
        <div style={{width:"100%",display:"flex",height:"20vh", textAlign:"center",gap:"20px"}}>
            <input ref={inputRaf} style={{border:"1px solid",height:"8vh",margin:"30px auto",focus:"purple",borderRadius:"8px"}} type="text" />
            <button style={{backgroundColor:"purple",color:"white",fontSize:"20px", margin:"25px auto",height:"8vh",padding:"15px 20px",borderRadius:"8px"}} onClick={handleClick}>Click Me</button>
        </div>
    )
}
export default Q2;