import axios from "axios";
import { BASE_URL, LOGIN_URL, LOGIN_INFO_URL } from "../utils/constants.js";

async function logIn(userName, password) {
  try {
    const response = await axios.post(`${BASE_URL}${LOGIN_URL}`, {
      login: userName,
      password: password,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Logged in successfully");
    localStorage.setItem("TOKEN", response.data.accessToken);
    localStorage.setItem("EXPIRE", response.data.expire);
    
    return response.data.accessToken;
  } catch (error) {
    console.error("Authorization issues...", error);
  }
}

async function accountInfo(token) {
  try {
    if (!token) {
      console.log("You are not authorized");
      return;
    }

    const response = await axios.get(`${BASE_URL}${LOGIN_INFO_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Account info is received successfully");
    return response.data.eventFiltersInfo;
  } catch (error) {
    console.error("Failed receiving data...", error);
  }
}

export { logIn, accountInfo };
