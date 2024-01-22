import React, { useState } from 'react'
import Routerconfig from './config/routers/Routerconfig'
import { SavePostProvider } from './context/savePost'

const App = () => {
  const [savePost , setSavePost] = useState([])
  return (
    <SavePostProvider value={{savePost, setSavePost}}>
      <Routerconfig />
    </SavePostProvider>

  )
}

export default App