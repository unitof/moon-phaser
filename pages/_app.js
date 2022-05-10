import { useEffect } from 'react';
import * as Fathom from 'fathom-client'

const fathomTrackingCode = process.env.NEXT_PUBLIC_FATHOM_SITEID

function App({ Component, pageProps }) {

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load(fathomTrackingCode, {
      url: 'https://sub.moon.sex/script.js'
    })
  })

  return <Component {...pageProps} />
}

export default App
