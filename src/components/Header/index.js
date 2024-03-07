import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="wave-logo"
        alt="wave"
      />
      <h1 className="logo-name">Wave</h1>
    </div>
    <ul className="listContainer">
      <li className="list-name">
        <Link to="/">Home</Link>
      </li>
      <li className="list-name">
        <Link to="/about">About</Link>
      </li>
      <li className="list-name">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Header
