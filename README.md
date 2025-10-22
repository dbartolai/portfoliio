# Enjoy My Portfolio!
- Check it out [here](drakebartolai.com)

## Blog Routing

- Each blog post lives in `public/blog` as a Markdown file that begins with front matter including `title`, `slug`, `date`, and optional `preview` text.
- Register the post by adding its filename and slug to `src/blogPostsConfig.js` so the blog index and dynamic route can fetch it.
- During development run `npm start` and visit `/blog/<your-slug>` (for example, `/blog/too-busy`) to load a post directly.
- Deployments on GitHub Pages support sharing direct links such as `/blog/classmate-architecture` thanks to the React Router setup.
