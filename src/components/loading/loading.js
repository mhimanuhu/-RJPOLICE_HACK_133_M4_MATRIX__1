import React from 'react'
import "./loading.css";
const loading = () => {
  return (
    <>
    <div className="loader_container">
    <div className="loader">
    <span></span>
    </div>
    <span className='loadingtext' >Loading. . .  .</span>
    </div>
    </>
    )
}

export default loading
