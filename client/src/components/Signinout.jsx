import React,{useState} from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import Login from "./Login";
const Signinout = () => {
  const [page,setpage] =useState("All ready register then LogIn")
  const [state, setstate] = useState(<Form/>);
  const changepage = ()=>{
    if(page ==="All ready register then LogIn"){
      setstate(<Login/>);
      setpage("Don't have account Signed In")
    }else{
      setstate(<Form/>);
      setpage("All ready register then LogIn")
    }
  }
  return (
    <>
      <Navbar />
      <div className="signout-signin d-flex align-items-center justify-content-center">
        <div className="mid_sign">
        {state}
          <button className = "btn btn-primary" onClick={changepage}>{page}</button>
        </div>
      </div>
    </>
  );
};

export default Signinout;
