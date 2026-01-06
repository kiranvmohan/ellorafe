import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import happy from '../assets/happy.jpg'
import visitor from '../assets/visitor.jpg.webp'
import announcement from '../assets/announcement.jpg'
import service from '../assets/service.jpg'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'




function Home() {
  const [isLogin,setIsLogin]= useState(false)
  const [role,setRole] = useState('')
  useEffect(()=>{
    const token = (sessionStorage.getItem("token"))
     const user = sessionStorage.getItem("existingUser")
   
   if (token && user) {
    setIsLogin(true)
    setRole(JSON.parse(user).role)
  }
}, [              ])

  return (
    <div className='container-fluid  p-0 ' style={{ backgroundColor: 'rgb(250,250,255)' }}>

      <section>
        <div className='section1 d-flex flex-column  justify-content-center ' style={{ backgroundImage: `url(${happy})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '90vh', paddingTop: '80px', paddingLeft: '50px' }}>

          <div className='quotes' style={{ color: 'rgb(33, 33, 33)' }}>Live Well <br />
            Live Together
          


          </div>
        
          
          {
            !isLogin?
            <Link to="/role" style={{ textDecoration: 'none' }}>
           <button className='btn btn-outline-dark mt-3'>Get Started <i className='fa-solid fa-arrow-right me-3'></i></button></Link>:  
           role === "resident"?
                           
        ( <Link to="/residentdash" style={{ textDecoration: 'none' }}>
           <button className='btn btn-outline-dark mt-3'>Manage Account <i className='fa-solid fa-arrow-right me-3'></i></button></Link>):(
                   <Link to="/authoritydash" style={{ textDecoration: 'none' }}>
           <button className='btn btn-outline-dark mt-3'>Manage Account <i className='fa-solid fa-arrow-right me-3'></i></button></Link>)

          }
        


   </div>
       
      </section>
      
          <div className='card-container p-3 fw-bold text-center  mt-3'>
        <h3>Ellora App</h3>
        <h2>Our Community Ecosystem</h2>
      </div>
    

    

      <section className='features container-fluid mt-5 ms-4'>
        <div className="row  ms-5 mb-5 "  >
          <div className="col-md-4">
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={visitor} className='mb-2 ' />
      <Card.Body>
        <Card.Title>Visitor Management</Card.Title>
        <Card.Text>
       Give access for your visitors
        </Card.Text>
      
      </Card.Body>
    </Card>
          </div>
          <div className="col-md-4">
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={announcement} className='mb-2 ' />
      <Card.Body className='p-3'>
        <Card.Title>Announcements</Card.Title>
        <Card.Text>
             Stay updated with community news instantly
        </Card.Text>
      
      </Card.Body>
    </Card>
            
          </div>
          <div className="col-md-4">
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={service} className='mb-2' />
      <Card.Body>
        <Card.Title>Service Requests</Card.Title>
        <Card.Text>
            Raise maintenance needs directly 
        </Card.Text>
      
      </Card.Body>
    </Card>
           
          </div>
        </div>
      </section>






    </div>

  )
}

export default Home
