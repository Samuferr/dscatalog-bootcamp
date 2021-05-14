import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './styles.scss'

const Navbar =  () => (
    <nav className = "row bg-primary main-nav">
         <div className="col-3">
        <Link to="/" className="nav-logo-text">
          <h4>DS Catalog</h4>
        </Link>
      </div>
      <div className="col-6">
        <ul className="main-menu">
          <li>
            <NavLink to="/" exact className="nav-link">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className="nav-link">
              CATÁLOGO
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" className="nav-link">
              ADMIN
            </NavLink>
          </li>
        </ul>
      </div>


    </nav>
)

export default Navbar;