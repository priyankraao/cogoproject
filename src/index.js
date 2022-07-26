import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Fav from './Pages/Fav'
// import App from './App';
import Home from './Pages/Home'
import About from './Pages/About'



import {BrowserRouter,Routes, Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <div className='whole'>
    <BrowserRouter>
   
    {/* <h1 > Search Your Movie </h1> */}
  <Routes>
  
    <Route path="/" element={<Home />} />
    <Route path="/about/:id" element={<About />} />
    {/* <Route path="/fav" element ={<Fav/>} */}
    <Route path="/Fav" element={<Fav />} />

  </Routes> 
  
  </BrowserRouter>

  </div>
  
  // </React.StrictMode>
);
