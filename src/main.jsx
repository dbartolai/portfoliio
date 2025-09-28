import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Blog from './Blog.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path="/blog" element={<Blog/>}/>
    </Routes>
  </BrowserRouter>
  
    
)
