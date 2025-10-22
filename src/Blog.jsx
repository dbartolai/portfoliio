import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Blog.css'
import { blogPostsConfig } from './blogPostsConfig'

function Blog() {
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const getBlogUrl = (filename) => {
    return 'https://raw.githubusercontent.com/dbartolai/portfoliio/refs/heads/gh-pages/blog/' + filename
  }

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
      const match = line.match(/^(\w+):\s*(.*)$/)
      if (match) {
        let value = match[2].trim()
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1)
        }
        data[match[1]] = value
      }
    })

    return { data, content: markdownContent }
  }

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const posts = await Promise.all(
          blogPostsConfig.map(async ({ filename, slug }) => {
            const response = await fetch(getBlogUrl(filename))
            if (!response.ok) {
              throw new Error(`Failed to load ${filename}`)
            }

            const content = await response.text()
            const { data: frontMatter } = parseFrontMatter(content)

            const isoDate = frontMatter.date
            let formattedDate = new Date().toLocaleDateString()

            if (isoDate) {
              try {
                const [year, month, day] = isoDate.split('-')
                const localDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
                formattedDate = localDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
              } catch (e) {
                console.warn(`Invalid date format in ${filename}:`, isoDate)
              }
            }

            return {
              filename,
              slug: frontMatter.slug || slug || filename.replace(/\.md$/, ''),
              title: frontMatter.title || filename.replace(/\.md$/, ''),
              preview: frontMatter.preview || '',
              date: formattedDate,
              rawDate: isoDate || null
            }
          })
        )

        posts.sort((a, b) => {
          if (a.rawDate && b.rawDate) {
            return new Date(b.rawDate) - new Date(a.rawDate)
          }
          if (a.rawDate) return -1
          if (b.rawDate) return 1
          return 0
        })

        setBlogPosts(posts)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
        setError('Unable to load blog posts right now. Please try again later.')
      }
    }

    fetchBlogPosts()
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handlePostClick = (slug) => {
    navigate(`/blog/${slug}`)
  }

  const handleBackClick = () => {
    navigate(`/`)
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

  if (error) {
    return (
      <div className="blog-container">
        <div className="container">
          <div className="no-posts">
            <p>{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-container">
      <div className="container">
        <button onClick={handleBackClick} className="back-button">
          ← Back
        </button>
        <header className="blog-header">
          <h1 className="section-title">Welcome to my Blog!</h1>

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
                onClick={() => handlePostClick(post.slug)}
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
