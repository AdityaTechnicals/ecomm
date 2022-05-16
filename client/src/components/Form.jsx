import React ,{useState} from 'react'
import Navbar from './Navbar'

const Form = () => {
  const [user,setstate]=useState({name:"",phnum:"",email:"",password:"",confirmpassword:""})
  let namee,valuee;
  const signup = (e)=>{
    namee = e.target.name;
    valuee = e.target.value;
    setstate({...user,[namee]:valuee})
  }
  const submit =async (e)=>{
    e.preventDefault();
    const {name,phnum,email,password,confirmpassword}=user;
    const responce= await fetch("/signin",{method: "POST",headers: {'Content-Type': 'application/json'},body:JSON.stringify({name,phnum,email,password,confirmpassword})});
    if(responce.status === 201){
      window.alert("reqest successfull")
    }else{
      window.alert("reqest was uns uccessful");
      console.log(responce.message);
    }
  }
  return (
    <>
      {/* <Navbar/> */}
    
      <div className="containerrr container">
        {/* <div className="text">Responsive Contact us Form</div> */}
        <form  method="post" >
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                required
                value={user.name}
                autocomplete="off"
                onChange={signup}
                name="name"
              />
              <div className="underline"></div>
              <label for=""> Name</label>
            </div>
            <div className="input-data">
              <input
                type="number"
                required
                value={user.phnum}
                autocomplete="off"
                onChange={signup}
                maxLength="12"
                name="phnum"
              />
              <div className="underline"></div>
              <label for="">Phone Number</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="password"
                required
                value={user.password}
                autocomplete="off"
                onChange={signup}
                name="password"
              />
              <div className="underline"></div>
              <label for="">password </label>
            </div>
            <div className="input-data">
              <input
                type="password"
                required
                value={user.confirmpassword}
                autocomplete="off"
                onChange={signup}
                name="confirmpassword"
              />
              <div className="underline"></div>
              <label for="">Confirmpassword</label>
            </div>
            <div className="input-data">
              <input
                type="email"
                required
                value={user.email}
                autocomplete="off"
                onChange={signup}
                name="email"
              />
              <div className="underline"></div>
              <label for="">Email Address</label>
            </div>
      
          </div>
          <div className="form-row">
         
     
             
   
           
              <br />
              <div className="form-row submit-btn">
                <div className="input-data">
                  <div className="inner">submit</div>
                  <input type="submit" value="submit" onClick={submit} />
                </div>
              </div>
            </div>
      
        </form>
      </div>
      
      </>
  )
}

export default Form