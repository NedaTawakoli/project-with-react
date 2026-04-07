import { Link, useParams } from "react-router-dom";
import { schoolList } from "./StudentDetails";

function DeteilsSchool(){
   const {name} = useParams();
   const foundSchool = schoolList.find((sc)=>{
    return sc.name ===name
   })
    return(
        <div>
            <h1>This is the Details Page</h1>
            <Link to={'/'}>Go to Home Page</Link>
            <h1>{foundSchool.name}</h1>
            <h2>{foundSchool.Gender}</h2>
            <h3>{foundSchool.Manager}</h3>
            <h4>{foundSchool.DeteilsSchool}</h4>
        </div>
    )
}
export default DeteilsSchool;