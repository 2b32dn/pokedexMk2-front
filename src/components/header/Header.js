import React from 'react'
import { Link } from 'react-router-dom'

import ToggleButton from '../sidebar/ToggleButton'

const Header = props => (
  <header className="nav-bar">
    <nav className="nav-elements">
      <ToggleButton/>
      {/* <img src="https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG" alt="Pokeball" className="nav-logo">
      
      </img> */}
      <div className="nav-logo">
        <li><Link to="/">Pokemon</Link></li>
      </div>
      <div className="spacer"></div>
      {/* <div>Search</div> */}
      <div className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Header