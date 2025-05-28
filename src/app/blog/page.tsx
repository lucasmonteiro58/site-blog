import { BlogList } from '@/templates/blog'
import { allPosts } from 'contentlayer/generated'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Site.Set',
  keywords: ['blog', 'dicas', 'estratégias', 'negócio', 'site.set'],
  description: 'Dicas e estratégias para impulsionar seu negócio',
  robots: 'index, follow',
  openGraph: {
    title: 'Blog - Site.Set',
    description: 'Dicas e estratégias para impulsionar seu negócio',
    url: 'https://site-blog-lyart.vercel.app/og-image.jpg',
    siteName: 'Site.Set',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: 'https://site-blog-lyart.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Site.Set',
      },
    ],
  },
}

export default function BlogListPage() {
  const sortedPost = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return <BlogList posts={sortedPost} />
}
