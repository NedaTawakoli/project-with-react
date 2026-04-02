import { useState } from "react"

function Example(){
   const [value,setValue]= useState(0);
    return(
        <div style={
            {
                width:"100%",
                display:"flex",
                justifyContent:"space-between",
                padding:"0 4px",
                margin:"25px 0"
            }
        }>
            <button style={
                {
                    border:"1px solid",
                    borderRadius:"5px",
                    boxShadow:"5px 5px 10px purple",
                    padding:"5px 25px",
                      height:"8vh",
                      margin:"20px 10px",
                      color:"purple",
                      fontSize:"20px"

                }
            } onClick={() => setValue(value+1)}>افزایش دهند</button>
            <h1>{value}</h1>
            <button 
            style={
                {
                    border:"1px solid",
                    borderRadius:"5px",
                    boxShadow:"5px 5px 10px purple",
                    padding:"5px 25px",
                    height:"8vh",
                    color:"purple",
                    fontSize:"20px",
                       margin:"20px 10px",

                }
            }
             onClick= {() => setValue(value-1)}>کاهش دهند</button>
        </div>
    )
}
export default Example;