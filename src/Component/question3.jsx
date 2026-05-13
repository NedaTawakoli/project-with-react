import { useRef, useState } from "react"

function Q3(){
  const [todo,setTodo] = useState(["Studying","Buying Bread"]);
  const [inputValue,setInputValue] = useState("");
  let inputRaf = useRef(null);
  function handleClick(){
    setTodo((prev)=>[...prev,inputValue]);
    setInputValue("");
    inputRaf.current.focus();
  }
    return(
        <>
        <div style={{width:"100%",display:"flex",justifyContent:"space-between",height:"20vh",alignItems:"center",padding:"20px 50px"}}>
        <input style={{border:"1px solid",height:"100vh",margin:"25px",focus:"purple",borderRadius:"8px",padding:"20px 0"}} ref={inputRaf} onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder="What do you want to do" style={{border:"2px solid"}} />
        <button style={{backgroundColor:"purple",color:"white",fontSize:"20px", margin:"25px 30px",height:"10vh",padding:"15px 25px",borderRadius:"8px"}} onClick={handleClick}>Save</button>
        </div>
        <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",color:"white",padding:"20px 40px"
        }}>
            {todo.map((x,index)=>(
               <div key={index}>
                <h1>{x}</h1>
               </div> 
            ))}
        </div>
        </>
    )
}
export default Q3;