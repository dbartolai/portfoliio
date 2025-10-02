import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import './Blog.css'

function Blog() {
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedPost, setSelectedPost] = useState(null)

  // List of blog post files (you'll need to update this when adding new posts)
  const blogFiles = [
    'BOOK_LIST'
    // Add more blog post filenames here as you create them
  ]

  // Simple front matter parser for browser
  const parseFrontMatter = (content) => {
    const frontMatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/m)
    
    if (!frontMatterMatch) {
      return { data: {}, content }
    }

    const [, frontMatterText, markdownContent] = frontMatterMatch
    const data = {}

    // Parse simple YAML-like front matter
    frontMatterText.split('\n').forEach(line => {
      const match = line.match(/^(\w+):\s*["']?([^"'\n]+)["']?$/)
      if (match) {
        data[match[1]] = match[2]
      }
    })

    return { data, content: markdownContent }
  }

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {

        const posts = await Promise.all(
          blogFiles.map(async (filename) => {
            const URL = 'https://raw.githubusercontent.com/dbartolai/portfoliio/refs/heads/gh-pages/blog/'+{filename}+'.txt'
            const response = await fetch(URL)
            const content = await response.text()
            
            // Parse front matter
            const { data: frontMatter, content: markdownContent } = parseFrontMatter(content)

            console.log('URL:', URL)
            console.log('Raw content:', content)
            console.log('Front matter:', frontMatter)
            console.log('Markdown content:', markdownContent)

            
            // Extract title from first h1 (# Title) if not in front matter
            const titleMatch = markdownContent.match(/^#\s+(.+)$/m)
            
            // Extract preview (first 150 characters after title)
            const contentWithoutTitle = markdownContent.replace(/^#\s+.+$/m, '').trim()
            const preview = contentWithoutTitle.length > 150 
              ? contentWithoutTitle.substring(0, 150) + '...'
              : contentWithoutTitle
            
            // Extract slug from filename
            const slug = filename.replace('.txt', '')
            
            // Handle date - use front matter date or fallback to current date
            let date = new Date().toLocaleDateString()
            if (frontMatter.date) {
              try {
                date = new Date(frontMatter.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
              } catch (e) {
                console.warn(`Invalid date format in ${filename}:`, frontMatter.date)
              }
            }

            

            // Add these debug logs:

            
            return {
              filename,
              slug,
              title: frontMatter.title || titleMatch?.[1] || filename.replace('.txt', ''),
              preview,
              content: markdownContent,
              date,
            }
          })
        )
        
        // Sort posts by date (newest first)
        posts.sort((a, b) => new Date(b.date) - new Date(a.date))
        
        setBlogPosts(posts)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
        setLoading(false)
      }


    }

    fetchBlogPosts()
  }, [])

  const handlePostClick = (post) => {
    setSelectedPost(post)
  }

  const handleBackToList = () => {
    setSelectedPost(null)
  }

  if (loading) {
    return (
      <div className="blog-container">
        <div className="container">
          <div className="blog-loading">
            <div className="loading-spinner"></div>
            <p>Loading blog posts...</p>
          </div>
        </div>
      </div>
    )
  }

  if (selectedPost) {
    return (
      <div className="blog-container">
        <div className="container">
          <button onClick={handleBackToList} className="back-button">
            ← More Posts
          </button>
          
          <article className="blog-post-full">
            <header className="blog-post-header">
              <h1 className="blog-post-title">{selectedPost.title}</h1>
              <div className="blog-post-meta">
                <span className="blog-post-date">{selectedPost.date}</span>
              </div>
            </header>
            
            <div className="blog-post-content">
              <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-container">
      <div className="container">
        <header className="blog-header">
          <h1 className="section-title">Blog</h1>
          <p className="blog-subtitle">
            Thoughts, experiences, and things I'm learning along the way
          </p>
        </header>

        {blogPosts.length === 0 ? (
          <div className="no-posts">
            <p>No blog posts found. Check back soon!</p>
          </div>
        ) : (
          <div className="blog-posts-grid">
            {blogPosts.map((post) => (
              <article 
                key={post.slug} 
                className="blog-post-card"
                onClick={() => handlePostClick(post)}
              >
                <div className="blog-post-content">
                  <h2 className="blog-post-card-title">{post.title}</h2>
                  <div className="blog-post-meta">
                    <span className="blog-post-date">{post.date}</span>
                  </div>
                  <p className="blog-post-preview">{post.preview}</p>
                  <div className="blog-post-read-more">
                    Read more →
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
