import { useParams } from "react-router-dom"
import { listStudent } from "../public/StudentInfo"
export default function Details(){
  const {id} =  useParams();
  const data = listStudent.find(item => item.id ==id)
    return(
        <div>
            <h1>Name:{data.name}</h1>
            <h2>LastName:{data.lastName}</h2>
            <h3>Gender:{data.Gender}</h3>
            <h4>Score:{data.score}</h4>
        </div>
    )
}
