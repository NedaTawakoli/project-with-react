import { useContext } from "react"
import { StudentContext } from "./App"

export default function Student(){
    const list = useContext(StudentContext);
    return(
        <div>
            <h1>All Students</h1>
            <div>
              {list.length >0 &&(
                <div>
                    {list.map((st)=>(
                        <h1>{x.name} {x.LastName} {x.Age} {x.Gender}</h1>
                    ))}
                </div>
              )}
            </div>
        </div>
    )
}