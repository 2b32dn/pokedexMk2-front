import React from 'react'

const SideBar = props => {
  let sideBarClasses = "side-bar";
  if(props.show) {
    sideBarClasses = 'side-bar-open'
  }
  return (
    <nav className={sideBarClasses}>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
      </ul>
    </nav>
  )
}

export default SideBar
