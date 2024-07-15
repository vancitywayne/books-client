import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import imagePath from "./../../assets/images/WhatsApp Image 2024-07-01 at 12.29.47_1b8dc2b3.jpg";

const GenerateImages = () => {
  return Array.from({ length: 6 }, (_, index) => (
    <div key={index} className={`content set-${index + 1}`}>
      <img src={imagePath} className="content-image" />
    </div>
  ));
};

function Login() {
  axios.defaults.withCredentials = true;

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("https://books-server-eight.vercel.app/login", values)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message)
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <div className="login">
      <div className="login-image">
        <div className="container">
          <GenerateImages />
        </div>
      </div>
      <div className="login-form">
        <span
          className="material-symbols-outlined"
          onClick={() => {
            navigate("/books-client");
          }}
        >
          arrow_back
        </span>
        <div className="title">Login</div>
        <form className="form" onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
          <div className="form-link">
            <span>
              Don't have an account?{" "}
              <Link className="to-link" to={"/signup"}>
                SignUp{" "}
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
