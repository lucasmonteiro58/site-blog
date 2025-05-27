import { LandingPage } from '@/templates/landing-page'
import { allPosts } from 'contentlayer/generated'

export default function Home() {
  console.debug(allPosts)
  return (
    <>
      <article className="flex flex-col">
        <LandingPage />
      </article>
    </>
  )
}
