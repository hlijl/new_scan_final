import axios from "axios";
import { BASE_URL, LOGIN_URL, LOGIN_INFO_URL } from "../utils/constants.js";

async function logIn(userName, password) {
  try {
    const response = await axios.post(
      `${BASE_URL}${LOGIN_URL}`,
      {
        login: userName,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Logged in successfully");

    const { accessToken, expire } = response.data;
    localStorage.setItem("TOKEN", accessToken);
    localStorage.setItem("EXPIRE", expire);

    return accessToken;
  } catch (error) {
    console.error("Authorization issues:", error.response ? error.response.data : error.message);
    throw new Error("Login failed");
  }
}

async function accountInfo() {
  try {
    const token = localStorage.getItem("TOKEN");

    if (!token) {
      console.log("You are not authorized");
      throw new Error("No token found");
    }

    const response = await axios.get(
      `${BASE_URL}${LOGIN_INFO_URL}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Account info is received successfully");
    return response.data.eventFiltersInfo;
  } catch (error) {
    console.error("Failed receiving data:", error.response ? error.response.data : error.message);
    throw new Error("Failed to retrieve account info");
  }
}

export { logIn, accountInfo };
