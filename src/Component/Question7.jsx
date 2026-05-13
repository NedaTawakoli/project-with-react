import { useRef, useState } from "react";

function Q7(){
   const [numbers,setNumbers] = useState({num1:0,num2:0});
   const [result,setResult] =useState(null);
   const ref = useRef(0);
   function handelClick(){
    setResult(numbers.num1+numbers.num2);
    ref.current++;
   }
    return(
        <div style={{color:"white",border:"0 0 2px 0 solid purple"}}>
            <div style={{width:"100%",display:"flex",gap:"17px",color:"white",justifyContent:"space-between",padding:"20px 40px"}}>
            <input value={numbers.num1} onChange={(e)=>setNumbers({...numbers,num1:Number(e.target.value)})} type="number" placeholder="number1" />
            <input value={numbers.num2} onChange={(e)=>setNumbers({...numbers,num2:Number(e.target.value)})} type="number" placeholder="number2" />
            <button onClick={handelClick}>Calculate</button>
            </div>
            <div style={{width:"100%",justifyContent:"space-between",display:"flex",padding:"20px 40px"}}>

            <h1>{result}</h1>
            <h1>you used this calculator {ref.current} times</h1>
            </div>
        </div>
    )
}
export default Q7;