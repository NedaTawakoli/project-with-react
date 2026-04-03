import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Nav";
import navbar from "./navbar";
import navBar from "./Nav";
// import hero from "./hero";

function App(){
  return(
    <>
    <Routes>
  <Route path="/Header" element ={ Header } />
  <Route path="/navBar" element ={ navBar } />
    </Routes>
    <Navbar/> 
  
    <Header text="مقاله در باره افقانیستان"/>
    <example1/>    
    </>
  )
}
export default App;