// // import { Route, Routes, useNavigate } from "react-router-dom";
// // import Header from "./Header";
// // import Navbar from "./Nav";
// // import navbar from "./navbar";
// // import navBar from "./Nav";
// // import AboutPage from "./About";
// // import Nav from "./navbar";
// // import Student from "./student";
// // // import hero from "./hero";
// // import { ListStudents } from "../public/StudentInfo";
// // import Home from "./Home";
// // import Details from "./StudentDetails";

import { useState } from "react";
import A from "./A";
import Q2 from "./Component/Qeustion2";
import Q3 from "./Component/question3";
import Q4 from "./Component/Question4";
import Q5 from "./Component/Question5";
import Q6 from "./Component/Question6";
import Q7 from "./Component/Question7";
import Q8 from "./Component/Question8";
import Q9 from "./Component/Question9";
import Q10 from "./Component/Question10";
import Q11 from "./Component/Question11";
import Q12 from "./Component/Question12";
import Q13 from "./Component/Question13";
import Q14 from "./Component/Question14";
import Q15 from "./Component/Question15";
import Q16 from "./Component/Question16";
import Q17 from "./Component/Question17";
import Q18 from "./Component/Question18";
import Q19 from "./Component/Question19";
import Q20 from "./Component/Question20";
import Q21 from "./Component/Question21";
import { Route, Routes } from "react-router-dom";
import Q22 from "./Component/Question22";
import Q23 from "./Component/Question23";

// import React,{ useReducer , useState } from "react";


// // function App(){
// //  const nav =  useNavigate();
// //  function handleClick(){
// //   nav('/school')
// //  }
// //   return(
// //     <>
// //     <Nav/>
// //     {/* <Student/> */}
// //     <h1 style={
// //       {
// //         textAlign:"center",
// //          border:"1px solid",
// //          width:"fit-content",
// //          margin:"20px auto",
// //          borderRadius:"5px",
// //          color:"purple",
// //          padding:"15px"
// //       }
// //     }>This is the Home page</h1>
// //     <button onClick={handleClick}>Go to the Teacher Page</button>
// //     <Routes>
// //   {/* <Route path="/Header" element ={ Header } />
// //   <Route path="/navBar" element ={ navBar } /> */}
// //   {/* <Route path="/about" element={AboutPage}/> */}
// //     </Routes>
// //     {/* <Navbar/>  */}
  
// //     {/* <Header text="مقاله در باره افقانیستان"/> */}
// //     {/* <example1/>     */}
// //     </>
// //   )
// // }
// // // export default App;
// let intialValue = 0;
// function reducer(state,show){
//   if(show==="increament"){
//     return state-1;
//   }
//   else if(show==="reset"){
//     return state = intialValue;
//   }
//   else{
//    return state+1;
//   }
// }
//  function App(){
//   const [state,func] = useReducer(reducer,intialValue);
//   return(
//     <div style={
//       {
//         backgroundColor:"black",
//         textAlign:"center",
//         fontSize:"30px",
//         display:"flex",
//         height:"100vh",
//         alignItems:"center",
//         justifyContent:"center",
//         flexDirection:"column"
//       }
//     }>
//       <h1 style={
//         {
//           color:"white",
//           boxShadow:"8px 8px 20px purple",
//         }
//       }>{state}</h1>
//       <button style={
//         {
//           width:"20%",
//           margin:"10px auto",
//           padding:"10px",
//           fontSize:"20px",
//           boxShadow:"8px 8px 20px purple",
//         }
//       } onClick={()=>func({type:"increament"})}>Increament</button>
//       <button style={
//         {
//           width:"20%",
//           margin:"10px auto",
//           padding:"10px",
//           fontSize:"20px",
//           boxShadow:"8px 8px 20px purple",
//         }
//       } onClick={()=>func({type:"dec"})}>Decreament</button>
//       <button style={
//         {
//           width:"20%",
//           margin:"10px auto",
//           padding:"10px",
//           fontSize:"20px",
//           boxShadow:"8px 8px 20px purple",
//         }
//       } onClick={()=>func({type:"reset"})}>Reset</button>
//     </div>
//   );
//  }
//  export default App;

// parts of increament and decreament
// function App(){
//   const [count,setCount] = useState(0);
//   return(
//     <div style={
//       {
//         width:"100%",
//         height:"30vh",
//         display:"flex",
//         flexDirection:"column",
//         backgroundColor:"black"
//       }
//     }>
//       <h1 style={
//         {
//           textAlign:"center",
//           fontSize:"40px",
//           color:"purple"
//         }
//       }>{count}</h1>
//       <button style={
//         {
//           width:"30%",
//           margin:"10px auto",
//           padding:"10px 0",
//           backgroundColor:"black",
//           color:"purple",
//           fontSize:"20px",
//           boxShadow:"5px 5px 10px purple"
//        }
//       } onClick={()=>setCount(count +1)}>افزایش دهنده</button>
//       <button style={
//         {
//           width:"30%",
//           margin:"10px auto",
//           padding:"10px 0",
//           fontSize:"20px",
//           boxShadow:"5px 5px 10px purple",
//           backgroundColor:"black",
//           color:"purple",
//         }
//       } onClick={()=>setCount(count - 1)}>کاهش دهنده</button>
//     </div>
//   )
// }
// export default App;
// function App(){
//   // const [value,setValue] = useState("");
//   // return(
//   //   <div>
//   //     <h1>{value}</h1>
//   //     <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" style={{border:"1px solid"}} />
//   //   </div>
//   // )
// {/* <Q2/>  */}
// }
// export default App;
//  --------------- labminval ---------
// export default function App(){
//   return(
//     <div style={{backgroundColor:"black"}}>
//      <Q2/>
//      <Q3/> 
//     <Q4/>
//       <Q5/>
//         <Q6/>
//         <Q7/>
//     </div>
   
//   )
// }
//  -------------- end labminval -----------
function App(){
  const listStudent =[
    {
      id:1,
      name:"Ali",
      lastName:"Qurbani"
    },
    {
      id:2,
      name:"Alina",
      lastName:"Ahmadi"
    },
    {
      id:3,
      name:"Sadaf",
      lastName:"Baqari"
    },
  ];
  return(
    <div style={{backgroundColor:"purple",color:"white"}}>
      {/* <nav style={{width:"100%",backgroundColor:"purple",color:"white",display:"flex",justifyContent:"space-between",padding:"20px 30px"}}>
        <h1>My App</h1>
        <button style={{padding:"15px 30px",borderRadius:"8px",border:"0"}}>Save</button>
      </nav> */}
      {/* <Q15 text="Wow Wow"/>
      <Q14 stList ={listStudent}/>
      <Q16/>
      <Q17/> */}
      <Q13/>
      <Q22/>
      {/* <Q23/> */}
   {/* <Routes>
    <Route path="/home" element={<Q18/>}/>
    <Route path="/about" element={<Q19/>}/>
    <Route path="/services" element={<Q20/>}/>
    <Route path="/contact" element={<Q21/>}/>
   </Routes> */}
    </div>
  )
}
{/* <Q13/> */}
export default App;