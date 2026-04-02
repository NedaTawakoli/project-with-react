import { useState } from "react";

function example1(){
    const [value,setValue]= useState("");
    return(
        <div>
            <h1></h1>
            <input style={
                {
                    border:"1px solid"
                }
            } type="text" value={"name"} />
        </div>
    )
}
export default example1;