import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer >
      

      <div
        style={{
        
          backgroundColor: 'black',
          color: 'whitesmoke',padding:'30px 0'
        }}
      >
        <div className="container-fluid">
          <div className="row">
          {/* Left Column */}
          <div className="col-lg-6 mb-3">
            <Link to="/" style={{ textDecoration: 'none', color: 'whitesmoke' }}>
              <h1 style={{ fontSize: '30px', fontWeight: 'bolder' }}>
                Ellora Lives
              </h1>
              <h3>About</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In repellendus atque, quia necessitatibus itaque doloribus alias deserunt repellat expedita cum illum recusandae optio dolorem, provident asperiores dolor, eius ratione ab!</p>


            </Link>

           
          </div>

          
          <div className="col-lg-6 text-lg-end text-center">
             <ul style={{ listStyle: 'none', padding: 0, margin: 0}}>
            
              <li><Link to="/privacy"  style={{color:'whitesmoke',textDecoration:'none'}}>Privacy Policy</Link></li>
              <li><Link to="/terms" style={{color:'whitesmoke',textDecoration:'none'}}>Terms</Link></li>
              <li><Link to="/contact " style={{color:'whitesmoke',textDecoration:'none'}}>Contact</Link></li>
            </ul>
            
            <p>© 2025 Ellora Lives. All rights reserved.</p>
          </div>
          </div>
        </div>
      </div>
      

       
       

        
      
    </footer>
  )
}

export default Footer
