import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Setting = () => {
  return (
    <div>
      <h2>Setting</h2>
      <nav>
        <Link to="about">About</Link>
        <Link to="more">More</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Setting