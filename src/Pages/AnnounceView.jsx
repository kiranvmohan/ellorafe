import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { announcementsApi } from '../services/allApi';


function AnnounceView() {
    const [announce, setAnnounce] = useState([]);
    useEffect(()=>{
      viewAnnouncements()
      
    },[])

    const viewAnnouncements = async()=>{
      try{
        const result = await announcementsApi()
        setAnnounce(result.data)
      }
      catch(error){
        console.log("Error fetching announcements",error)
      }
    }
    return (
        <>

            <div className='container mt-4'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h3 className='fw-bold text-success'>Announcements</h3>
                    <Link  to="/residentdash" className="btn btn-secondary">
                    Back</Link>
                </div>

                <div className="list-group">
                    {
                      ( !announce || announce.length === 0) ? (
          <p className="text-muted text-center">No announcements yet</p>
        ) : (
          announce.map((a, index) => (
            <div key={index} className="list-group-item shadow-sm mb-2">
              <h6 className="fw-bold">{a.title}</h6>
              <p className="mb-1">{a.message}</p>
              <div className="d-flex justify-content-between text-muted small">
                <span>Category: {a.category}</span>
                <span>Priority: {a.priority}</span>
                <span>{a.date}</span>
              </div>
            </div>
          ))
        )
                    }
                </div>

             
        

            </div>






        </>
    )
}

export default AnnounceView
