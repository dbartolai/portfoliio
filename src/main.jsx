import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Blog from './Blog.jsx'
import BlogPost from './BlogPost.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const rawBasename = (typeof process !== 'undefined' && process.env && process.env.PUBLIC_URL)
  ? process.env.PUBLIC_URL
  : (import.meta.env.BASE_URL || '/')

const basename = rawBasename.replace(/\/$/, '') || '/'

function RestoreRedirect() {
  const navigate = useNavigate()

  useEffect(() => {
    const path = sessionStorage.getItem('redirect')
    if (path) {
      sessionStorage.removeItem('redirect')
      navigate(path, { replace: true })
    }
  }, [navigate])

  return null
}


createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={basename}>
    <RestoreRedirect />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  </BrowserRouter>


)
