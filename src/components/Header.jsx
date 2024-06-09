import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="logo_container">
        <Link to="/"><img className="myntra_home " src="images/myntra_logo.webp" alt="Logo" /></Link>
      </div>
      <div className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">Studio <sup>New</sup></a>
      </div>
      <div className="search_bar">
        <i className="bi bi-search search_icon"></i>
        <input className="search_box" placeholder="Search for products, brands and more" type="text" />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <i className="bi bi-person action_icon"></i>
          <span className="action_name">Profile</span>
        </div>
        <div className="action_container">
          <i className="bi bi-heart"></i>
          <span className="action_name">Wishlist</span>
        </div>
        <Link className="action_container" to="/bag">
          <i className="bi bi-bag"></i>
          <span className="action_name">Bag</span>
        </Link>
      </div>
    </header>
  )
}

export default Header