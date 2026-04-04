import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Header.jsx';
// import App from './App.jsx';
// import './index.css'
import App from './App.jsx'
import AboutPage from './About.jsx';
import Services from './Serveices.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<App/>}/>
  <Route path='/about' element={<AboutPage/>}/>
  <Route path='/services' element={<Services/>}/>
 </Routes>
 </BrowserRouter>
  </StrictMode>,
)
