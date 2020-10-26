import React, { useState } from 'react'
import AppHeader from '../AppHeader/AppHeader'

const App = () => {
  const [text, setText] = useState(() => updateText)

  const sm = window.matchMedia('(min-width: 600px)')
  const md = window.matchMedia('(min-width: 1024px)')
  const lg = window.matchMedia('(min-width: 1440px)')
  const xl = window.matchMedia('(min-width: 1920px)')

  const updateText = (event) => {
    console.log(event.media)
    setText(event.media)
  }

  sm.addListener(updateText)
  md.addListener(updateText)
  lg.addListener(updateText)
  xl.addListener(updateText)

  return (
    <>
      <AppHeader text={text} />
      <main></main>
    </>
  )
}

export default App
