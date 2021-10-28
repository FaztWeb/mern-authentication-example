import React, { useState } from "react";
import { useAuth } from "../context";

export default function Register() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(user);
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  return (
    <div>
      <h1>Register</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <input type="text" name="fullname" id="email" onChange={handleChange} />

        <input type="email" name="email" id="email" onChange={handleChange} />

        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />

        <button>Register</button>
      </form>
    </div>
  );
}
