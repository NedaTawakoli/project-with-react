import { useEffect, useState } from "react"
import Users from "./UserCart";

function Q12(){
    const [listUsers,setListUsers] = useState([]);
    const [value,setValue] = useState("");
    useEffect(()=>{
       async function getUsers(){
         const date = await fetch("https://jsonplaceholder.typicode.com/users");
         const value = await date.json();
        const filteredList = value.filter((x)=>{
          return  x.name.toLowerCase().includes(value.toLowerCase());
         })
         setListUsers(filteredList);
        }
        getUsers();
    },[value]);
    return(  
        <div style={{ width:"100%",minHeight:"100vh",backgroundColor:"wheat"}}>
           <div style={{width:"100%",maxWidth:"950px",margin:"20px auto"}}>
            <input value={value} onChange={(e)=>setListUsers(e.target.value)} type="text" style={{border:"1px solid",width:"100%",borderRadius:"8px",margin:"20px 0",padding:"15px 10px"}} placeholder="Search A user" />
             <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                {listUsers.length > 0 && listUsers.map((user)=>(
                    <Users user = {user} value={value}/>
                ))}
             </div>
           </div>
        </div>
    )
}
export default Q12;