import React, { useState } from "react";
import {loginUser,useAuth} from '../context'
import {Link} from 'react-router-dom'

export function Login({history}) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { loading, errorMessage} = useAuth();

  const handleChange = ({ target: { value, name } }) =>
    setCredentials({ ...credentials, [name]: value });

  const handleSubmit= async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(credentials)
      if (!response) return;
      history.push('/dashboard');
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form action="">

        <h1>Login Page</h1>

        {
          errorMessage && (
            <p>{errorMessage}</p>
          )
        }

        <input type="email" name="email" onChange={handleChange} />

        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />

        <button disabled={loading}>Login</button>
      </form>

      <p>Don't have an account? <Link to="/register">Register</Link></p>

    </div>
  );
}
