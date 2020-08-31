import React, { useState } from "react";
import "./style.css";
import Input from "../../components/Input";
import { useForm } from "../../global/functions/useForm";

function SignUp() {
  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
    picture: "",
  });

  const handleInput = (event) => {
    const { value, name } = event.target;
    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(form);
  };

  return (
    <div className="signUpContainer">
      <form onSubmit={handleSubmit}>
        <h3>Sign up to Labematch</h3>
        <input
          name="name"
          type="text"
          value={form.name}
          placeholder="name"
          onChange={handleInput}
          pattern={["[A-Za-z ]{3,}"]}
          required
        />
        <input
          name="email"
          type="text"
          value={form.email}
          placeholder="email"
          onChange={handleInput}
          required
        />
        <Input
          name="password"
          type="text"
          value={form.password}
          placeholder="password"
          onChange={handleInput}
          required
        />
        <input
          name="picture"
          type="text"
          value={form.picture}
          placeholder="picture link"
          onChange={(event) => handleInput(event)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <img src={form.picture} alt="profile" />
    </div>
  );
}

export default SignUp;
