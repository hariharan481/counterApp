import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Button from './button';
import Form from './Form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Button/>}/>
  <Route path='/ap' element={<App/>}/>
  <Route path='/' element={<Button/>}/>
  <Route path='/bb' element={<App/>}/>
  <Route path='/' element={<Button/>}/>
  <Route path='/cc' element={<Form/>}/>
 
  </Routes>
  </BrowserRouter>
  </>
    
  
  
 
);
