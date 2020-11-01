import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'

const AppHeaderHeading = () => {
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
      return 'MD (1024-1339px)'
    } else if (breakpointSM.matches) {
      return 'SM (600-1023px)'
    } else {
      return 'MOBILE (< 600px)'
    }
  }

  // ref
  const textWrapper = useRef()
  const textRef = useRef('')

  // state
  const [text, setText] = useState(() => updateBreakpoint())

  // add mediaQueryList listeners
  breakpoints.forEach((breakpoint) => {
    breakpoint.addListener(() =>
      setTimeout(() => {
        setText(updateBreakpoint)
      }, 1000)
    )
  })

  // gsap animation
  const animateText = () => {
    const tl = gsap.timeline({
      paused: true,
      defaults: { duration: 0.1, ease: 'none' },
    })

    const oldLetters = oldText.split('')
    console.log(oldText)
    const newLetters = text.split('')

    // delete
    oldLetters.forEach((letter) => {
      tl.to(textWrapper.current, {
        onComplete: () => {
          const slice = textWrapper.current.textContent.slice(0, -1)
          textWrapper.current.textContent = slice
        },
      })
    })

    // type
    newLetters.forEach((letter) => {
      tl.to(textWrapper.current, {
        onComplete: () => {
          textWrapper.current.textContent += letter
        },
      })
    })

    tl.play(0)
  }

  const oldText = textRef.current
  console.log(oldText)

  // did mount
  useEffect(() => {
    textRef.current = text
    animateText()
  })

  return (
    <h1 className='app-header__heading'>
      <span className='app-header__heading--static'>Breakpoint is:</span>
      <span className='app-header__heading-- animated' ref={textWrapper}></span>
    </h1>
  )
}

export default AppHeaderHeading
