import React from 'react'
import Navbar from './Navbar'

const About = () => {
   const adi = "Variable";
  return (
    <div classNameName="About ">
      <Navbar />
      <div id="" className="best">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Welcome {adi} </h2>
                     <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="best_box">
                     <h4>500GB <br/>Micro SD Card</h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate velit</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="best_box">
                     <h4>100GB <br/> Internal Ram</h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate velit</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="best_box">
                     <h4>100% <br/> High Quality</h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate velit</p>
                  </div>
               </div>
               <div className="col-md-12">
                  <a className="read_more" href="#">Read more</a>
               </div>
            </div>
         </div>
      </div>

      <div id="contact" className="request">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Request a Call back</h2>
                     <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
                     incididunt ut labore et dolore magna</span>
                  </div>
               </div>
            </div>
          </div>
          </div>
     </div>
   
  )
}

export default About