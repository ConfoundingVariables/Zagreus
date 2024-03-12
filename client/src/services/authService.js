import axios from "axios";

export const registerUser = async (email, fullname, username, password) => {
  try {
    const response = await axios.post("/api/auth/register", {
      email,
      fullname,
      username,
      password,
    });
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};
