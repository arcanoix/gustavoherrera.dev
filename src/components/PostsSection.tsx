import PostCard from "./PostCard"
import { POSTS } from "@/content/posts"
import type { Lang } from "@/i18n/ui"

interface PostsSectionProps {
  lang: Lang
}

const PostsSection = ({ lang }: PostsSectionProps) => {
  const posts = POSTS[lang]

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
