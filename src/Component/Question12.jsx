import { useEffect, useState } from "react"

function Q12(){
    const [users,setUsers] = useState([]);
    useEffect(()=>{
       async function getUsers(){
         const date = await fetch("");
         const value = await date.json();
         setUsers(value);
        }
        getUsers();
    },[]);
    return(
        <div>

        </div>
    )
}