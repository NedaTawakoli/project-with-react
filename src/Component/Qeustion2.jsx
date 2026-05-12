import { useRef } from "react"

function Q2(){
    const inputRaf = useRef(null);
    function handleClick(){
      inputRaf.current.focus();
    }
    return(
        <div>
            <input ref={inputRaf} style={{border:"1px solid"}} type="text" />
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}
export default Q2;