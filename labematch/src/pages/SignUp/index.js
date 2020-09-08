import React, { useState } from "react";
import "./style.css";
import { useForm } from "../../global/functions/useForm";
import { useHistory } from "react-router-dom";
import { signup } from "../../global/functions/apiHandler";
import { GenreSelector } from "../../global/html/GenreSelector";

function SignUp() {
  const history = useHistory();

  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
    picture: "",
    genre1: "",
    genre2: "",
    genre3: "",
  });

  const handleInput = (event) => {
    const { value, name } = event.target;
    onChange(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const genre = [`${form.genre1}`, `${form.genre2}`, `${form.genre3}`];
    const body = {
      name: form.name,
      email: form.email,
      password: form.password,
      picture: form.picture,
      favGenres: genre,
    };

    console.log(body);

    await signup(body).catch((e) =>
      window.alert("There is an error with your info, please try again")
    );

    resetForm();
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
          type="password"
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
        <GenreSelector selectHandler={handleInput} name="genre1" />
        <GenreSelector selectHandler={handleInput} name="genre2" />
        <GenreSelector selectHandler={handleInput} name="genre3" />

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
