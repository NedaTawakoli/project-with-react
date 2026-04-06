import { Link } from "react-router-dom";
import { listStudent } from "../public/StudentInfo";
import Nav from "./navbar";
const Student=()=>{
    return(
        <div style={
            {
                width:"100%",
                display:"flex"
            }
        }>
        <Nav/>
        <ol style={
            {
                
            }
        }>
     {listStudent.map((person)=>(
        <li key={person.id} style={{
            listStyleType:"none",
            margin:"12px",
            textDecoration:"underline"
        }}><Link style={
          {
            color:"black",
            fontSize:"32px",
            textDecoration:"none"
          }
        } to="">{person.name}</Link></li>
     ))}
        </ol>
        </div>

    )
}
export default Student;