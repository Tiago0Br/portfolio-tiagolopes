import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

export interface MarkdownContentProps {
  markdown: string
}

export function MarkdownContent({ markdown }: MarkdownContentProps) {
  return (
    <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} skipHtml={false}>
      {markdown}
    </Markdown>
  )
}
