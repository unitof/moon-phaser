import Fathom from './Fathom'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <style>{styles}</style>
      </head>
      <body>
        <Fathom/>
        <Page>{children}</Page>
      </body>
    </html>
  )
}
