import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <div className='container-css'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout