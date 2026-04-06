import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Nav";
import navbar from "./navbar";
import navBar from "./Nav";
import AboutPage from "./About";
import Nav from "./navbar";
import Student from "./student";
// import hero from "./hero";

function App(){
  return(
    <>
    <Nav/>
    <Student/>
    <h1 style={
      {
        textAlign:"center",
         border:"1px solid",
         width:"fit-content",
         margin:"20px auto",
         borderRadius:"5px",
         color:"purple",
         padding:"15px"
      }
    }>This is the Home page</h1>
    <Routes>
  {/* <Route path="/Header" element ={ Header } />
  <Route path="/navBar" element ={ navBar } /> */}
  {/* <Route path="/about" element={AboutPage}/> */}
    </Routes>
    {/* <Navbar/>  */}
  
    {/* <Header text="مقاله در باره افقانیستان"/> */}
    {/* <example1/>     */}
    </>
  )
}
export default App;