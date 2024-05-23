import Fathom from './Fathom'
import './global.css'

import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'The Moon',
  description: 'Waxing or waning live in your browser',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <Fathom/>
        {children}
      </body>
    </html>
  )
}
