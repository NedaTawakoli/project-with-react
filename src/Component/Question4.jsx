import { useRef, useState } from "react"

function Q4(){
  const [counter,setCounter] = useState(0);
  const ref = useRef(null);
  function handleClick(){
    setCounter((prev)=>prev+1);
    const randomNumber = Math.floor.random()*10;
    if(randomNumber>5){
        ref.current.style.buckgroundColor = "red";
    }else{
    ref.current.style.buckgroundColor = "blue";
    }
  }
    return(
        <div ref={ref} style={{height:"200px",width:"100%",display:"flex",color:"white",justifyContent:"space-between",padding:"20px 40px"}}>
            <button style={{height:"10vh",backgroundColor:"purple",color:"white",fontSize:"20px",borderRadius:"8px" ,padding:"20px 30px"}} onClick={handleClick}>Change The Bg</button>
        <h1>You have changed the Bg {counter} times</h1>
        </div>
    )
}
export default Q4;