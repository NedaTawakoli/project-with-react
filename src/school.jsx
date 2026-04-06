import { Link } from "react-router-dom"
import { listStudent } from "../public/StudentInfo"
import { schoolList } from "./StudentDetails"
export default function School(){
    return(
        <div style={
            {
                width:"100%",
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between",
                
            }
        }>
            <h1 style={
                {
                    textAlign:"center",
                    fontSize:"35px",
                    border:"1px solid",
                    borderRadius:"4px",
                    width:"fit-content",
                    margin:"20px auto",
                    padding:"12px",
                    backgroundColor:"pink",
                    color:"white"
                }
            }>This is the of nearby schools</h1>
            <ul style={
                {
                    display:"flex",
                    justifyContent:"space-around",
                    gap:"15px",

                }
            }>
                {schoolList.map(school=>(
                    <li style={
                        {
                            listStyleType:"none",
                            padding:"12px",
                        }
                    }>
                        <Link style={
                            {
                                textDecoration:"none",
                                color:"black",
                                fontSize:"25px",
                                color:"pink"
                            }
                        } to={""}>{school.Name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}