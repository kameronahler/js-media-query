import React from 'react'

const AppHeader = ({ text }) => {
  return (
    <header className='app-header'>
      <h1 className='app-header__heading'>{text}</h1>
    </header>
  )
}

export default AppHeader
