import { PostPage as Post } from '@/templates/blog'
import { allPosts, Post as PostType } from 'contentlayer/generated'
import { GetStaticPaths, GetStaticProps } from 'next'

interface PostPageProps {
  post: PostType
}

export default function PostPage({ post }: PostPageProps) {
  console.log('post', post)
  return <Post post={post} />
}

export const getStaticPaths = (async () => {
  const sortedPost = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const recentPosts = sortedPost.slice(0, 5)

  const paths = recentPosts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context) => {
  const { slug } = context.params as { slug: string }

  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}) satisfies GetStaticProps
