import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  
  const { error, signInWithGoogle } = useAuth();

  return (
    <div className="py-5 d-flex justify-content-center align-items-center">
      <div className="py-5 px-4 text-center shadow rounded-3">
        <h4 className="mb-3 text-primary">Please Register</h4>
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
        <span>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </span>
        <div>------or-------</div>
        <button onClick={signInWithGoogle} className="btn btn-secondary mt-2">
          Google Sign-In
        </button>
      </div>
    </div>
  );
};

export default Register;
