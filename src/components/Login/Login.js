import React from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import './Login.css';

const Login = () => {
  const { error, setError, setIsLoading, setUser, signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';
  // console.log("came from", location.state?.from);

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        setError("");

        history.push(redirect_uri);
        // console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };


  return (
    <div className="py-5 d-flex justify-content-center align-items-center login-background">
      <div className="py-5 px-4 text-center shadow rounded-3">
        <h4 className="mb-3 text-white">Please Login</h4>
        <div className="row mb-3">{error}</div>
        <div>
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
          <button className="btn btn-primary my-3">Login</button>
        </div>
        <span className="text-white">
          New user? <NavLink to="/register" className="text-warning">Register</NavLink>
        </span>
        <div>------or-------</div>
        <button onClick={handleGoogleLogin} className="btn btn-warning mt-2">
          Google Sign-In
        </button>
      </div>
    </div>
  );
};

export default Login;
