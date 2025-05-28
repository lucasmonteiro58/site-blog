import { BlogList } from '@/templates/blog'
import { allPosts, Post } from 'contentlayer/generated'
import { GetStaticProps } from 'next'

interface BlogPageProps {
  posts: Post[]
}

export default function BlogPage({ posts }: BlogPageProps) {
  return <BlogList posts={posts} />
}

export const getStaticProps: GetStaticProps = async () => {
  const sortedPost = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
  return {
    props: { posts: sortedPost },
  }
}
