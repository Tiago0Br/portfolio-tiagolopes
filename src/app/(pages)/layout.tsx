export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      {children}
      {/* <ChatButton /> */}
    </div>
  )
}
