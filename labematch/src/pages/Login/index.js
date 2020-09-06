import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { useForm } from "../../global/functions/useForm";
import { login } from "../../global/functions/apiHandler";

function Login() {
  const history = useHistory();

  const { form, onChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const body = form;
    await login(body).catch((e) => window.alert("Invalid parameters"));
    resetForm();
  };

  return (
    <div className="loginContainer">
      <h1>LABEMATCH - login</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="email"
          placeholder="email"
          required
          value={form.email}
          onChange={inputHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={form.password}
          required
          onChange={inputHandler}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
