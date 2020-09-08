import axios from "axios";

export const baseUrl = `https://qtvh5662ge.execute-api.us-east-1.amazonaws.com/dev`;

export const signup = async (body) => {
  await axios.post(`${baseUrl}/users/signup`, body);
};

export const login = async (body) => {
  const response = await axios.post(`${baseUrl}/users/login`, body);

  return response;
};

export const fetchProfile = async (token) => {
  try {
    const response = await axios.get(`${baseUrl}/users/fetchProfile`, {
      headers: { token: token },
    });
    return response;
  } catch (e) {
    window.alert(e);
  }
};
