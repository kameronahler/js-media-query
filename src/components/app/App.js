import React, { useState } from 'react'
import AppHeader from '../AppHeader/AppHeader'

const App = () => {
  const [text, setText] = useState(() => 'load')
  const sm = window.matchMedia('(min-width: 600px)')
  const md = window.matchMedia('(min-width: 1024px)')
  const lg = window.matchMedia('(min-width: 1440px)')
  const xl = window.matchMedia('(min-width: 1920px)')

  const updateText = () => {
    if (xl.matches) {
      setText('xl')
    } else if (lg.matches) {
      setText('lg')
    } else if (md.matches) {
      setText('md')
    } else if (sm.matches) {
      setText('sm')
    } else {
      setText('mobile')
    }
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
