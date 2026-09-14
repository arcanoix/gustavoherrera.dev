import PostCard from "./PostCard"
import { POSTS } from "@/content/posts"
import type { Lang } from "@/i18n/ui"

interface PostsSectionProps {
  lang: Lang
}

const PostsSection = ({ lang }: PostsSectionProps) => {
  const posts = POSTS[lang]

  return (
    <div className="flex flex-col md:w-[700px] lg:w-[800px] w-full justify-center items-center gap-7">
      {posts.map(({ title, description, date, tags, url }) => (
        <PostCard
          key={title}
          title={title}
          description={description}
          tags={tags}
          date={date}
          url={url}
          lang={lang}
        />
      ))}
    </div>
  )
}

export default PostsSection
