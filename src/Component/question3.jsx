import { useRef, useState } from "react"

function Q3(){
  const [todo,setTodo] = useState(["Studying","Buying Bread"]);
  const [inputValue,setInputValue] = useState("");
  let inputRaf = useRef(null);
  function handleClick(){
    setTodo((prev)=>[...prev.inputValue]);
    setInputValue("");
    inputRaf.current.focus();
  }
    return(
        <>
        <input ref={inputRaf} onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder="What do you want to do" style={{border:"2px solid"}} />
        <button onClick={handleClick}>Save</button>
        <div>
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