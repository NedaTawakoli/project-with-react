import { useState } from "react"

export default function Q5(){
    const [info,setInfo] = useState({name:"",email:""})
  return(
    <div>
        <input value={info.name} onChange={(e)=>setInfo({...info,name:e.target.value})} style={{border:"2px solid"}} type="text" placeholder="Please enter your name" />
        <input value={info.email} onChange={(e)=>setInfo({...info,email:e.target.value})} style={{border:"2px solid"}} type="email" placeholder="Please enter your Email" />
        <h1>Name:{info.name}</h1>
        <h1>Email:{info.email}</h1>
    </div>
  )
}