import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_column">
          <h3>Online Shopping</h3>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Card</a>
          <a href="#">Myntra Insider</a>
        </div>

        <div className="footer_column">
          <h3>CUSTOMER POLICIES </h3>
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
          <a href="#">T&C</a>
          <a href="#">Terms of Use</a>
          <a href="#">Track Orders</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellations</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Grievance Officer</a>
        </div>

        <div className="footer_column">
          <h3>Useful Links</h3>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Site Map</a>
          <a href="#">Corporate Information</a>
          <a href="#">Whitehat</a>
          <a href="#">Cleartrip</a>
        </div>

      </div>

      <hr />

      <div className="copyright">
        © 2024 www.myntra.com. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer