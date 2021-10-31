import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import './Register.css';


const Register = () => {
  
  const { error, signInWithGoogle } = useAuth();

  return (
    <div className="py-5 d-flex justify-content-center align-items-center register-background">
      <div className="py-5 px-4 text-center shadow rounded-3">
        <h4 className="mb-3 text-white">Please Register</h4>
        <div className="row mb-3">{error}</div>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            required
          />
          <br />
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
          <button className="btn btn-primary my-3">Register</button>
        </div>
        <span className="text-white">
          Already have an account? <NavLink to="/login" className="text-dark">Login</NavLink>
        </span>
        <div>------or-------</div>
        <button onClick={signInWithGoogle} className="btn btn-warning mt-2">
          Google Sign-In
        </button>
      </div>
    </div>
  );
};

export default Register;
