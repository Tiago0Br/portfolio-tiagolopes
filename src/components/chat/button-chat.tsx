import Image from 'next/image'

export function ButtonChat() {
  return (
    <div className="fixed bottom-5 right-5 cursor-pointer">
      <Image src="/chat.svg" alt="chat" width={50} height={50} draggable={false} />
    </div>
  )
}
