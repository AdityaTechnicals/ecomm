import React from "react";

const Contact = () => {
  const [user, setuser] = React.useState({

    email: "",
    password: ""

  });
  const submit = async (e) => {
    e.preventDefault();
    const {  email, password } = user;
    const response = fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({  email,password }),
    });
    if (response.status === 400 || !response) {
      window.alert(" invalid login");
    } else {
      window.alert(" login successful");
    }
    const data = response.json()
    
  };
  let name;
  let value;
  const signup = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="containerrr container">
        {/* <div className="text">Responsive Contact us Form</div> */}
        <form method="post">
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                required
                value={user.email}
                autocomplete="off"
                onChange={signup}
                name="email"
              />
              <div className="underline"></div>
              <label for=""> Name</label>
            </div>
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
              <label for="">Password</label>
            </div>
        
            <div className="input-data">
              <div className="inner"></div>
              <input type="submit" value="submit" onClick={submit} />
            </div>
          </div>


       
        </form>
      </div>
    </>
  );
};

export default Contact;
