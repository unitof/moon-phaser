import Moon from '../api/moon-phase'

const styles = `
body {
  background-color: #141414;
  color: #d6d5c0;
  text-align: center;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  position: relative;
}

.flex-suspender {
  width: 100%;
  height: 100%;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0;
  padding: 40px;
  display: flex;
  align-items: center;
  position: absolute;
}

.flex-suspended {
  margin: auto;
  text-align: center;
}

#moon-holder {
  width: 50vh;
  height:  50vh;
}

.moon {
  fill: #d6d5c0;
}

.moonback {
  /* resisting .dark-side-of-the-moon class */
  fill: black;
}
`

export default function Page() {
  return (
    <html>
      <head>
        <title>The Moon</title>
        <meta charSet="utf-8" />
        <style>{styles}</style>
      </head>
      <body>
        <div className="flex-suspender">
          <Moon/>
        </div>
      </body>
    </html>
  )
}
