import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// import { register } from "../redux/features/authSlice";

const SignUpPage = () => {

 
  const [signUpUser, setSignUpUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const { name, email, password, role } = signUpUser;
 

  useEffect(() => {
 
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (email && password && name && role) {
      console.log("befor ");
     
      console.log(signUpUser);
      console.log("after ");
    }
  };

  const onChangeRegister = (e) => {
    setSignUpUser({ ...signUpUser, [e.target.name]: e.target.value });
    console.log(signUpUser);
  };
  return (
    <body className="form_body ">
      <div className="form_container register_top">
        <input type="checkbox" id="check" />
        <div className="login_page form_page">
          <header>Signup</header>
          <form onSubmit={submitHandler}>
            <input
              name="name"
              value={name}
              onChange={onChangeRegister}
              type="text"
              placeholder="Enter your name"
            />
            <input
              name="email"
              value={email}
              onChange={onChangeRegister}
              type="text"
              placeholder="Enter your email"
            />
            <input
              name="password"
              value={password}
              onChange={onChangeRegister}
              type="password"
              placeholder="Create a password"
            />
            <input
              name="role"
              value={role}
              onChange={onChangeRegister}
              type="Text"
              placeholder="Role"
            />
            <input type="submit" className="form_button" value="Signup" />
          </form>
          <div className="form_signup">
            <span className="form_signup">
              Already have an account?
              <label for="check">
                <Link to="/">Login</Link>
              </label>
            </span>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SignUpPage;