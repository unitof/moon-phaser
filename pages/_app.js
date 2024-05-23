import { useEffect } from 'react';
import * as Fathom from 'fathom-client'
import './global.css'

const fathomSideId = process.env.NEXT_PUBLIC_FATHOM_SITEID

function App({ Component, pageProps }) {

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load(fathomSideId)
  })

  return <Component {...pageProps} />
}

export default App
