import React from 'react'

function Header() {
  return (
    <header>
      <div class="logo_container">
        <a href="#"><img class="myntra_home " src="images/myntra_logo.webp" alt="Logo" /></a>
      </div>
      <div class="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">Studio <sup>New</sup></a>
      </div>
      <div class="search_bar">
        <i class="bi bi-search search_icon"></i>
        <input class="search_box" placeholder="Search for products, brands and more" type="text" />
      </div>
      <div class="action_bar">
        <div class="action_container">
          <i class="bi bi-person action_icon"></i>
          <span class="action_name">Profile</span>
        </div>
        <div class="action_container">
          <i class="bi bi-heart"></i>
          <span class="action_name">Wishlist</span>
        </div>
        <a class="action_container" href="bag.html">
          <i class="bi bi-bag"></i>
          <span class="action_name">Bag</span>
        </a>
      </div>
    </header>
  )
}

export default Header