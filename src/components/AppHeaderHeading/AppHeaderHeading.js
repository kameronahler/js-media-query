import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const AppHeaderHeading = ({ mediaQuery }) => {
  // ref
  const textWrapper = useRef()
  const textRef = useRef('')

  // gsap animation
  const animateText = () => {
    const tl = gsap.timeline({
      paused: true,
      defaults: { duration: 0.05, ease: 'none' },
    })

    const oldLetters = oldText.split('')
    const newLetters = mediaQuery.split('')

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

  // did mount
  useEffect(() => {
    textRef.current = mediaQuery
    animateText()
  })

  return (
    <h1 className='app-header__heading'>
      <span className='app-header__heading--static'>
        The current breakpoint is
      </span>
      <span className='app-header__heading--animated' ref={textWrapper}></span>
    </h1>
  )
}

export default AppHeaderHeading
