import { Link } from "react-router-dom";

 function Q15(props){   
  const navBar =[
          {
              text:"Home",
              href:"/home"
          },
          {
              text:"About",
              href:"/about"
          },
          {
              text:"Services",
              href:"/services"
          },
          {
              text:"Contact",
              href:"/contact"
          },
  ]   
  return(
       <div style={{width:"100%",display:"flex",backgroundColor:"purple",justifyContent:"space-between"}}>
   <nav style={{width:"100%",color:"white",margin:"15px 10px",display:"flex",justifyContent:"space-between",gap:"20px"}}>
       <h1>Logo</h1>
       <ul style={{width:"80%",display:"flex",justifyContent:"space-between",margin:"16px 0"}}>
           {navBar.map((x)=>(
               <li style={{listStyle:"none"}} key={x.href}><Link style={{textDecoration:"none",color:"white",fontSize:"20px"}} href={x.href}>{x.text}</Link></li>
           ))}
       </ul>
   </nav>
   {/* <h1>{props.text}</h1> */}
       </div>
    )
}
export default Q15;