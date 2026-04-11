import { useEffect, useState } from "react";

export default function Testing(){
    let [list,setList] = useState([]);
    useEffect(()=>{
       async function getData(){
        const data =  await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonData = await data.json();
        setList(jsonData);
        }
        getData();
    },[list])
    return(
        <div>
            {list.length ===0 &&(
                <div>
                    <h1>No Users exists </h1>
                </div>

            )}
            {list.length>0 &&(
                <table style={
                    {
                        width:"100%",
                        border:"1px solid",
                        borderCollapse:"collapse"
                    }
                }>
                    <tr>
                    <th style={
                        {
                          border:"1px solid",
                          padding:"18px 10px",
                          textAlign:"center",  
                        }
                    }>Name</th>
                    <th style={
                        {
                          border:"1px solid",
                          padding:"18px 10px",
                          textAlign:"center",  
                        }
                    }>LastName</th>
                    <th style={
                        {
                          border:"1px solid",
                          padding:"18px 10px",
                          textAlign:"center",  
                        }
                    }>Email</th>
                    </tr>
                    {list.map(user=>(
                    <tr>
                        <td style={
                            {
                                border:"1px solid"
                            }
                        }>{user.name}</td>
                        <td style={
                            {
                                border:"1px solid"
                            }
                        }>{user.username}</td>
                        <td style={
                            {
                                border:"1px solid"
                            }
                        }>{user.email}</td>
                    
                    </tr>
                    ))}
                </table>
            )}
        </div>
    )
}