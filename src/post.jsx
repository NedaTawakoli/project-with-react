import { useEffect, useState } from "react";

export default function Posts(){
    let [list,setList] = useState([]);
    useEffect(()=>{
       async function getData(){
        const data =  await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.json();
        setList(jsonData);
        }
        getData();
    },[list])
    return(
        <div>
            {list.length ===0 &&(
                <div>
                    <h1>No Posts exists </h1>
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
                    }>Id</th>
                    <th style={
                        {
                          border:"1px solid",
                          padding:"18px 10px",
                          textAlign:"center",  
                        }
                    }>Title</th>
                    <th style={
                        {
                          border:"1px solid",
                          padding:"18px 10px",
                          textAlign:"center",  
                        }
                    }>Body</th>
                    </tr>
                    {list.map(user=>(
                    <tr>
                        <td style={
                            {
                                border:"1px solid"
                            }
                        }>{user.id}</td>
                        <td style={
                            {
                                border:"1px solid"
                            }
                        }>{user.title}</td>
                        <td style={
                            {
                                border:"1px solid"
                            }
                        }>{user.body}</td>
                    
                    </tr>
                    ))}
                </table>
            )}
        </div>
    )
}