import React, { useState } from 'react';
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-md-5">
          <RegisterForm />
        </div>
        <div className="col-md-5">
          <LoginForm />
        </div>
    </div>
  );
};

export default Auth;

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [_, setCookies] = useCookies(['access_token'])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response=  await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });
      setCookies("access_token", response.data.token, {
        sameSite: 'none', // Set SameSite attribute to "None"
        secure: true, // Set secure attribute to true for HTTPS
      });
      window.localStorage.setItem("userID", response.data.userID);
      navigate("/home");
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <Form
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          label="Login"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
      setUsername("");
      setPassword("");
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <Form
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          label="Register"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

const Form = ({ username, setUsername, password, setPassword, label, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2 className="mb-4">{label}</h2>
      <div className="form-group">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        {label}
      </button>
    </form>
  );
};
