import Moon from '../api/moon-phase'

export default function Page() {
  return (
    <>
      <head>
        <title>The Moon</title>
        <meta charSet="utf-8" />
      </head>
      <body>
        <div className="flex-suspender">
          <Moon/>
        </div>
      </body>
    </>
  )
}
