import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import imagePath from "./../../assets/images/WhatsApp Image 2024-07-01 at 12.29.47_1b8dc2b3.jpg";

const GenerateImages = () => {
  return Array.from({ length: 6 }, (_, index) => (
    <div key={index} className={`content set-${index + 1}`}>
      <img src={imagePath} className="content-image" />
    </div>
  ));
};

function SignUp() {
  axios.defaults.withCredentials = true;
  const redirect = useNavigate();

  const [values, setValues] = useState({
    email: "",
    fullname: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    axios
      .post("https://books-server-eight.vercel.app/registration", values)
      .then((res) => {
        console.log(res.data);
        redirect("/books-client");
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <div className="sign-up">
      <div className="sign-up-image">
        <div className="container">
          <GenerateImages />
        </div>
      </div>
      <div className="sign-up-form">
        <span
          className="material-symbols-outlined"
          onClick={() => {
            redirect("/books-client");
          }}
        >
          arrow_back
        </span>
        <div className="title">Sign Up</div>
        <form className="form" onSubmit={handleSignUp}>
          <input
            type="text"
            name="fullname"
            placeholder="Fullname"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
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
              Have an account?{" "}
              <Link className="to-link" to={"/books-client"}>
                Login{" "}
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
