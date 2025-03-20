import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({icon, text, path, isOpen, setIsOpen}) => {
  return (
    <Link
      to={path}
      className="flex items-center gap-4 cursor-pointer w-full hover:text-blue-400 border-gray-700 last:border-none py-2"
    //   onClick={() => setIsOpen(false)}
    >
        <span 
            onClick={() => setIsOpen((prev) => !prev)}
            data-tooltip-id={!isOpen ? "sidebar-tooltip" : undefined} 
            data-tooltip-content={!isOpen ? text : undefined} 
            className='text-xl '
            >
                {icon}
            </span>
        {isOpen && <div>{text}</div>}
        </Link>
  )
}

export default NavItem