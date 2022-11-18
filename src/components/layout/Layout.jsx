import React from 'react'

const Layout = ({children}) => {
  return (
    <div className=' py-15 px-10 bg-white h-screen'>
        {children}
    </div>
  )
}

export default Layout