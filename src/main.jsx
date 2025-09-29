import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Blog from './Blog.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RestoreRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = sessionStorage.getItem('redirectPath');
    if (path) {
      sessionStorage.removeItem('redirectPath');
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return null;
}


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RestoreRedirect/>
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path="/blog" element={<Blog/>}/>
    </Routes>
  </BrowserRouter>
  
    
)
