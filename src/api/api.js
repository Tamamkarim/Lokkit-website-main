import axios from "axios";

// const base_url = "http://localhost:4000";
// const base_url = "http://localhost:4000";
export const global_url = "http://localhost:4000";

export const fetchUserList = async () => {
  const res = await axios.get(`/api/users`);
  return res.data;
};

// get user by id
export const getUserById = async (userId) => {
  const res = await axios.get(`/api/users/${userId}`);
  return res.data;
};
