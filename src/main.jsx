import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import Header from './Header.jsx';
import App from './App.jsx';
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={App}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
