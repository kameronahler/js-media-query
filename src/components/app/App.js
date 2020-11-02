import React, { useState } from 'react'
import AppHeader from '../AppHeader/AppHeader'

const App = () => {
  // mediaQueryList api
  const breakpointSM = window.matchMedia('(min-width: 600px)')
  const breakpointMD = window.matchMedia('(min-width: 1024px)')
  const breakpointLG = window.matchMedia('(min-width: 1440px)')
  const breakpointXL = window.matchMedia('(min-width: 1920px)')
  const breakpoints = [breakpointSM, breakpointMD, breakpointLG, breakpointXL]

  const updateBreakpoint = () => {
    if (breakpointXL.matches) {
      return 'XL (>= 1920px)'
    } else if (breakpointLG.matches) {
      return 'LG (1440-1919px)'
    } else if (breakpointMD.matches) {
      return 'MD (1024-1439px)'
    } else if (breakpointSM.matches) {
      return 'SM (600-1023px)'
    } else {
      return 'MOBILE (< 600px)'
    }
  }

  // state
  const [mediaQuery, setMediaQuery] = useState(() => updateBreakpoint())

  // add mediaQueryList listeners
  breakpoints.forEach((breakpoint) => {
    breakpoint.addListener(() =>
      setTimeout(() => {
        setMediaQuery(updateBreakpoint)
      }, 1000)
    )
  })

  // conditional css
  const addModifiers = () => {
    if (breakpointXL.matches) {
      return 'app--xl'
    } else if (breakpointLG.matches) {
      return 'app--lg'
    } else if (breakpointMD.matches) {
      return 'app--md'
    } else if (breakpointSM.matches) {
      return 'app--sm'
    } else {
      return 'app--mobile'
    }
  }

  return (
    <div className={`app ${addModifiers()}`}>
      <AppHeader mediaQuery={mediaQuery} />
    </div>
  )
}

export default App
