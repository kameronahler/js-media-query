import React, { useState, useEffect } from 'react'
import gsap from 'gsap'

const AppHeader = () => {
  const breakpointSM = window.matchMedia('(min-width: 600px)')
  const breakpointMD = window.matchMedia('(min-width: 1024px)')
  const breakpointLG = window.matchMedia('(min-width: 1440px)')
  const breakpointXL = window.matchMedia('(min-width: 1920px)')
  const breakpoints = [breakpointSM, breakpointMD, breakpointLG, breakpointXL]

  const updateTextState = () => {
    if (breakpointXL.matches) {
      return 'XL'
    } else if (breakpointLG.matches) {
      return 'LG'
    } else if (breakpointMD.matches) {
      return 'MD'
    } else if (breakpointSM.matches) {
      return 'SM'
    } else {
      return 'MOBILE'
    }
  }

  const [text, setText] = useState(() => {
    return updateTextState()
  })

  useEffect(() => {
    const textWrapper = document.querySelector('#animate')
    textWrapper.textContent = null

    const tlSettings = {
      paused: true,
      defaults: { duration: 0.5, ease: 'none' },
    }
    const tl = gsap.timeline(tlSettings)
    const letters = text.split('')

    letters.forEach((letter) => {
      tl.to(textWrapper, {
        onComplete: () => {
          textWrapper.textContent += letter
        },
      })
    })

    tl.play(0)
  })

  return (
    <header className='app-header'>
      <h1 className='app-header__heading'>
        Breakpoint is&nbsp;
        <span id='animate'></span>
      </h1>
    </header>
  )
}

export default AppHeader
