export interface Message {
  id: string
  author: string
  text: string
  side: 'left' | 'right'
}
