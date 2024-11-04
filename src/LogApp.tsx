import { useState, useEffect } from 'react'
import './LogApp.css'

function sortableFromTitle(title: string) {
  return title.split('-').slice(0, 3).join(' ')
}

type Post = {
  path: string
  title: string
}

function LogApp() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const modules = import.meta.glob('/public/log/*.html')

    const postsList = Object.keys(modules).map(path => ({
      path: path.replace('/public', ''),
      title: path
        .split('/')
        .pop()
        ?.replace('.html', '')
        .split('-')
        .join(' ') || ''
    }))
    .sort((a, b) => {
      const titleA = a.title || '';
      const titleB = b.title || '';
      return sortableFromTitle(titleA).localeCompare(sortableFromTitle(titleB));
    })
    .reverse()

    setPosts(postsList)
  }, [])

  return (
    <>
      <div className="container">
        <h1>Log</h1>
        {posts.map((post, index) => (
          <li key={index}>
          <a href={post.path}>
            {post.title}
          </a>
        </li>
      ))}
      </div>
    </>
  )
}

export default LogApp
