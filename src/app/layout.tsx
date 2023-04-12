import './globals.css'

export const metadata = {
  title: 'Whatsup 2.0 Clone',
  description: 'This is clone application developed for whatsup 2',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  return (
    <html lang="en">
      <body>
        {children}</body>
    </html>
  )
} 
