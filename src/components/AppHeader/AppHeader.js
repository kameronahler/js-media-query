import React from 'react'
import AppHeaderHeading from '../AppHeaderHeading/AppheaderHeading'

const AppHeader = ({ mediaQuery }) => {
  return (
    <header className='app-header'>
      <AppHeaderHeading mediaQuery={mediaQuery} />
    </header>
  )
}

export default AppHeader
