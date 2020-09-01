import React, { useState } from "react";
import "./style.css";
import { useForm } from "../../global/functions/useForm";
import { useHistory } from "react-router-dom";

function SignUp() {
  const history = useHistory();

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

    console.log("Sign up form: " + form);
    history.push("/login");
  };

  return (
    <div className="signUpContainer">
      <h1>LABEMATCH - sign up</h1>
      <form onSubmit={handleSubmit}>
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
        <input
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
      <img
        src={
          form.picture
            ? form.picture
            : "https://www.masterresellrights.com/pages/SpinnerProSoftware/images/your-face-here.jpg"
        }
        alt="profile"
      />
    </div>
  );
}

export default SignUp;
