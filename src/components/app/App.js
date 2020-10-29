import React, { useState } from 'react'
import AppHeader from '../AppHeader/AppHeader'

const App = () => {
  const breakpointSM = window.matchMedia('(min-width: 600px)')
  const breakpointMD = window.matchMedia('(min-width: 1024px)')
  const breakpointLG = window.matchMedia('(min-width: 1440px)')
  const breakpointXL = window.matchMedia('(min-width: 1920px)')
  const breakpoints = [breakpointSM, breakpointMD, breakpointLG, breakpointXL]

  const updateTextState = () => {
    if (breakpointXL.matches) {
      return 'xl'
    } else if (breakpointLG.matches) {
      return 'lg'
    } else if (breakpointMD.matches) {
      return 'md'
    } else if (breakpointSM.matches) {
      return 'sm'
    } else {
      return 'mobile'
    }
  }

  breakpoints.forEach((bp) => {
    bp.addListener(() => setText(updateTextState))
  })

  const [text, setText] = useState(() => {
    return updateTextState()
  })

  return (
    <>
      <AppHeader text={text} />
      <main></main>
    </>
  )
}

export default App
