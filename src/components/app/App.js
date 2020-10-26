import React, { useState } from 'react'
import AppHeader from '../AppHeader/AppHeader'

const App = () => {
  const [text, setText] = useState('Parcel + React is pretty spiffy')

  return (
    <>
      <AppHeader text={text} />
      <main></main>
    </>
  )
}

export default App
