import { useEffect, useState } from "react";

function Q13(){
 const [list,setList] = useState([]);
 const [value,setValue] = useState("");
 useEffect(()=>{
    async function getData(){
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jawab = await data.json();
        const filteredList = jawab.filter((x) => x.title.includes(value));
        setList(filteredList);
    }
    getData();
 },[value]);
 list.length == 0 && (
    <div>
        {" "}
        <h1>No post exists</h1>
    </div>
 );
    return(
        <div style={{backgroundColor:"purple",width:"100%",minHeight:"100vh"}}>
            <div style={{width:"100%",width:"100%",display:"flex",gap:"16px",flexDirection:"column",padding:"20px"}}>
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Search......" style={{padding:"15px 0",width:"100%"}} />
                <div style={{gap:"15px"}}>
                   {list.map((list)=>(
                    <div style={{width:"100%",padding:"25px",border:"1px solid",borderRadius:"20px"}} key={list.id}>
                      <h1 style={{fontSize:"25px",fontWeight:"bold"}}>{value ? list.title.split(new RegExp(`(${value})`,"gi"))
                    .map((part,index)=>
                    part.toLowerCase()===value.toLowerCase()?(
                        <span key={index} style={{color:"red"}}>
                            {part}
                        </span>
                    ):(
                       part 
                    ),
                ): list.title  
                    }</h1>
                    <p style={{fontSize:"15px"}}>{list.body}</p>
                    </div>
                   ))}
                </div>
            </div>
        </div>
    )
}
export default Q13;