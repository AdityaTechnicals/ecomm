import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <>
<Navbar/>
      <div className="maincontact">
        <div className="childcontact">
        {/* <i class="fa-brands fa-instagram"></i> */}
      <a href="https://www.instagram.com/adi_13424/"> <div className="insta">  
     <div className="innerbox">  
     </div>  
   </div>  </a> 
        <a href="https://t.me/+mBqYM5bVFKNlNmU1"><i class="fa-brands fa-telegram"></i></a>
      <a href="https://adityatechnicals.herokuapp.com/">  <i class="fa-solid fa-globe"></i></a>
        </div>
      </div>
    </>
  )
}

export default Contact