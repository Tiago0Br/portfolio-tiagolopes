import { MarkdownContent } from '../shared/markdown-content'

export interface ProjectReadmeProps {
  markdown: string
}

export function ProjectReadme({ markdown }: ProjectReadmeProps) {
  return (
    <div className="flex flex-col items-stretch p-6 bg-black border border-zinc-800 rounded-2xl">
      <div className="prose prose-zinc prose-invert" style={{ maxWidth: '100%' }}>
        <MarkdownContent markdown={markdown} />
      </div>
    </div>
  )
}
