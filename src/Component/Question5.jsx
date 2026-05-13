import { useState } from "react"

export default function Q5(){
    const [info,setInfo] = useState({name:"",email:""})
  return(
    <div style={{width:"100%",display:"flex",color:"white",gap:"16px",justifyContent:"space-between",padding:"20px 60px"}}>
      <div>

        <h1 style={{color:"purple",padding:"17px 0"}}>Name:{info.name}</h1>
        <input style={{height:"20vh"}} value={info.name} onChange={(e)=>setInfo({...info,name:e.target.value})} style={{border:"2px solid"}} type="text" placeholder="Please enter your name" />
      </div>
      <div>
        
        <h1 style={{color:"purple",padding:"17px 0"}}>Email:{info.email}</h1>
        <input style={{height:"20vh",padding:"20px 30px"}} value={info.email} onChange={(e)=>setInfo({...info,email:e.target.value})} style={{border:"2px solid"}} type="email" placeholder="Please enter your Email" />
      </div>
      
    </div>
  )
}