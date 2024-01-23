import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signIn.css";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const signinSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signin">
      <div className="signIn__page">
        <form onSubmit={(e) => signinSubmit(e)}>
          <h3>Chatter Box</h3>
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" autoComplete="off" />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
          />
          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>
        <p>
          You don't have an account?{" "}
          <Link to="/signup">
            <span>SignUp</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
