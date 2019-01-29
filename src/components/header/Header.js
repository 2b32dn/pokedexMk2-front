import React from 'react'
import { NavLink } from 'react-router-dom'


import ToggleButton from '../sidebar/ToggleButton'

const Header = props => (
  <header className="nav-bar">
    <nav className="nav-elements">
      <ToggleButton></ToggleButton>
      {/* <img src="https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG" alt="Pokeball" className="nav-logo">
        
      </img> */}
      <div className="nav-logo">
        <li><NavLink to="/">Pokemon</NavLink></li>
      </div>
      <div className="nav-spacer"></div>
      <div className="nav-links">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/">Home</NavLink></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Header