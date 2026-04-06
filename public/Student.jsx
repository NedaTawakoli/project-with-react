import { Link } from "react-router-dom";
import Nav from "../src/navbar"
import { listSTUDENT } from "./StudentInfo";
const Student=()=>{
    return(
        <div>
        <Nav/>
        <ol>
     {listStudent.map((person)=>{
        <li key={person.id} style={{
            listStyleType:"none"
        }}><Link to="">{person.name}</Link></li>
     })}
        </ol>
        </div>

    )
}