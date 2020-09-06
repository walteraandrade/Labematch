import axios from "axios";

export const baseUrl = `https://qtvh5662ge.execute-api.us-east-1.amazonaws.com/dev`;

export const signup = async (body) => {
  await axios.post(`${baseUrl}/users/signup`, body);
};

export const login = async (body) => {
  const response = await axios.post(`${baseUrl}/users/login`, body);

  return response;
};
