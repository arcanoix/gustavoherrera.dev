import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { GoLinkExternal } from "react-icons/go"
import { useTranslations } from "@/i18n/utils"
import type { Lang } from "@/i18n/ui"

interface PostCardProps {
  title: string
  description: string
  date: string
  tags: string[]
  url: string
  lang: Lang
}

const PostCard = ({ title, description, date, tags, url, lang }: PostCardProps) => {
  const t = useTranslations(lang)
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-slate-700 dark:text-slate-400"
          >
            {title}
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="text-slate-700 dark:text-slate-400"
            >
              {date}
            </Badge>
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-slate-700 dark:text-slate-400"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <a href={url} target="_blank" rel="noreferrer">
            <Button variant="secondary">
              {t("post.readMore")} <GoLinkExternal />
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  )
}
export default PostCard
