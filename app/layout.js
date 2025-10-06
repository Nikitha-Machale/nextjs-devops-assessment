import './globals.css'

export const metadata = {
  title: 'Next.js DevOps Assessment',
  description: 'A simple Next.js app for DevOps assessment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
