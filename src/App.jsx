// import { Route, Routes, useNavigate } from "react-router-dom";
// import Header from "./Header";
// import Navbar from "./Nav";
// import navbar from "./navbar";
// import navBar from "./Nav";
// import AboutPage from "./About";
// import Nav from "./navbar";
// import Student from "./student";
// // import hero from "./hero";
// import { ListStudents } from "../public/StudentInfo";
// import Home from "./Home";
// import Details from "./StudentDetails";

import React,{ useReducer , useState } from "react";


// function App(){
//  const nav =  useNavigate();
//  function handleClick(){
//   nav('/school')
//  }
//   return(
//     <>
//     <Nav/>
//     {/* <Student/> */}
//     <h1 style={
//       {
//         textAlign:"center",
//          border:"1px solid",
//          width:"fit-content",
//          margin:"20px auto",
//          borderRadius:"5px",
//          color:"purple",
//          padding:"15px"
//       }
//     }>This is the Home page</h1>
//     <button onClick={handleClick}>Go to the Teacher Page</button>
//     <Routes>
//   {/* <Route path="/Header" element ={ Header } />
//   <Route path="/navBar" element ={ navBar } /> */}
//   {/* <Route path="/about" element={AboutPage}/> */}
//     </Routes>
//     {/* <Navbar/>  */}
  
//     {/* <Header text="مقاله در باره افقانیستان"/> */}
//     {/* <example1/>     */}
//     </>
//   )
// }
// // export default App;
let intialValue = 0;
function reducer(state,show){
  if(show==="increament"){
    return state-1;
  }
  else if(show==="reset"){
    return state = intialValue;
  }
  else{
   return state+1;
  }
}
 function App(){
  const [state,func] = useReducer(reducer,intialValue);
  return(
    <div style={
      {
        backgroundColor:"black",
        textAlign:"center",
        fontSize:"30px",
        display:"flex",
        height:"100vh",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
      }
    }>
      <h1 style={
        {
          color:"white",
          boxShadow:"8px 8px 20px purple",
        }
      }>{state}</h1>
      <button style={
        {
          width:"20%",
          margin:"10px auto",
          padding:"10px",
          fontSize:"20px",
          boxShadow:"8px 8px 20px purple",
        }
      } onClick={()=>func({type:"increament"})}>Increament</button>
      <button style={
        {
          width:"20%",
          margin:"10px auto",
          padding:"10px",
          fontSize:"20px",
          boxShadow:"8px 8px 20px purple",
        }
      } onClick={()=>func({type:"dec"})}>Decreament</button>
      <button style={
        {
          width:"20%",
          margin:"10px auto",
          padding:"10px",
          fontSize:"20px",
          boxShadow:"8px 8px 20px purple",
        }
      } onClick={()=>func({type:"reset"})}>Reset</button>
    </div>
  );
 }
 export default App;