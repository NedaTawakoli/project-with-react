import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Nav";
import navbar from "./navbar";
import navBar from "./Nav";
import AboutPage from "./About";
import Nav from "./navbar";
// import hero from "./hero";

function App(){
  return(
    <>
    <Nav/>
    <h1>This is the main page</h1>
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