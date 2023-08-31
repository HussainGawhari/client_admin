import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginUser;
 

  useEffect(() => {
  
  }, []);

  const submitHandler = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginUser),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.Token;
        console.log('Login successful', token);
        localStorage.setItem('token', token);
       
        setLoggedIn(true);
        if (loggedIn) {
          navigate("/");
        }
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }

  };

  const onChangeLogin = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
    console.log(loginUser);
  };
  return (
    <body className="form_body">
      <div className="form_container">
        <input type="checkbox" id="check" />
        <div className="login_page form_page">
          <header>Login</header>
          <form onSubmit={submitHandler}>
            <input
              name="email"
              value={email}
              onChange={onChangeLogin}
              type="text"
              placeholder="Enter your email"
            />
            <input
              name="password"
              value={password}
              onChange={onChangeLogin}
              type="password"
              placeholder="Create a password"
            />
            <a href="#">Forgot password?</a>
            <input type="submit" className="form_button" value="Login" />
          </form>
          <div className="form_signup">
            <span className="form_signup">
              Don't have an account?
              <label for="check">
                <Link to="/register">SignUp</Link>
              </label>
            </span>
          </div>
        </div>
      </div>
    </body>
  );
};

export default LoginPage;