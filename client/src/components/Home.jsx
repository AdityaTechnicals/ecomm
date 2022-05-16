import React,{useState} from 'react'
import Navbar from "./Navbar"
import imghome from "../images/top_img.png"

const Home = () => {

  return (<>
    <div className="home">
    <Navbar/>
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-12 d-flex">
            <div className="caption">
              <h1 className="home_heading">Computers And</h1> 
              <h1 className="home_heading">Laptop Shop</h1> 
              <h2  className="home_heading2">Free Multipurpose Responsive</h2>
              <br />
              <button className="btn-primary btn-home ">Buy Now</button>

            </div>
            <div className="homeimg ">
              <img src={imghome} alt="anything"   />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home