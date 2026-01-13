import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div style={{ backgroundColor: 'black', color: 'whitesmoke', padding: '30px 0' }}>
        <div className="container-fluid">
          <div className="row">

            
            <div className="col-lg-6 mb-3">
              <Link to="/" style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                <h1 style={{ fontSize: '30px', fontWeight: 'bolder' }}>
                  Ellora Lives
                </h1>
              </Link>

              <h3>About</h3>
              <p>
                A community-focused platform designed to manage announcements,
                residents, and society communication efficiently.
              </p>
            </div>

            
            <div className="col-lg-6 text-lg-end text-center">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li>
                  <Link to="/privacy" style={linkStyle}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" style={linkStyle}>Terms</Link>
                </li>
                <li>
                  <Link to="/contact" style={linkStyle}>Contact</Link>
                </li>
              </ul>

              <p className="mt-2">
                © 2025 Ellora Lives. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

const linkStyle = {
  color: 'whitesmoke',
  textDecoration: 'none'
}

export default Footer

