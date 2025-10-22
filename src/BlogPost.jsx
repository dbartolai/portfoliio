import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import './Blog.css'
import { blogPostsConfig } from './blogPostsConfig'

function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getBlogUrl = (filename) => {
    const base = import.meta.env.BASE_URL || '/'
    const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
    return `${normalizedBase}/blog/${filename}`
  }

  const parseFrontMatter = (content) => {
    const frontMatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/m)

    if (!frontMatterMatch) {
      return { data: {}, content }
    }

    const [, frontMatterText, markdownContent] = frontMatterMatch
    const data = {}

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
    const loadPost = async () => {
      const postConfig = blogPostsConfig.find((postDefinition) => postDefinition.slug === slug)

      if (!postConfig) {
        setError('Post not found.')
        setLoading(false)
        return
      }

      try {
        const response = await fetch(getBlogUrl(postConfig.filename))
        if (!response.ok) {
          throw new Error('Unable to load blog post')
        }

        const rawContent = await response.text()
        const { data: frontMatter, content: markdownContent } = parseFrontMatter(rawContent)

        const isoDate = frontMatter.date
        let formattedDate = new Date().toLocaleDateString()

        if (isoDate) {
          try {
            const [year, month, day] = isoDate.split('-')
            const localDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
            formattedDate = localDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
          } catch (e) {
            console.warn(`Invalid date format in ${postConfig.filename}:`, isoDate)
          }
        }

        setPost({
          title: frontMatter.title || postConfig.slug,
          preview: frontMatter.preview || '',
          date: formattedDate,
          content: markdownContent
        })
      } catch (err) {
        console.error(err)
        setError('Unable to load this post. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug])

  const handleBackToList = () => {
    navigate('/blog')
  }

  if (loading) {
    return (
      <div className="blog-container">
        <div className="container">
          <div className="blog-loading">
            <div className="loading-spinner"></div>
            <p>Loading blog post...</p>
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
            <button onClick={handleBackToList} className="back-button">← More Posts</button>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return null
  }

  return (
    <div className="blog-container">
      <div className="container">
        <button onClick={handleBackToList} className="back-button">
          ← More Posts
        </button>

        <article className="blog-post-full">
          <header className="blog-post-header">
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <p className="blog-post-date">{post.date}<br/>{post.preview}</p>
            </div>
          </header>

          <div className="blog-post-content">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogPost
