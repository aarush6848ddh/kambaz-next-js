import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

export const USERS_API = `${HTTP_SERVER}/api/users`;

export const signin = async (credentials: any) => {
  try {
    const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
    return response.data;
  } catch (error: any) {
    // Return the error message from server, or a default message
    if (error.response?.status === 401) {
      throw new Error(error.response?.data?.message || "Invalid username or password");
    }
    throw error;
  }
};

export const signup = async (user: any) => {
  try {
    const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
    return response.data;
  } catch (error: any) {
    // Return the error message from server, or a default message
    if (error.response?.status === 400) {
      throw new Error(error.response?.data?.message || "Username already taken or invalid data");
    }
    throw error;
  }
};

export const updateUser = async (user: any) => {
  try {
    const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error("You must be logged in to update your profile");
    }
    throw new Error(error.response?.data?.message || "Failed to update profile");
  }
};

export const profile = async () => {
  try {
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
  } catch (error: any) {
    // 401 is expected when user is not logged in - return null instead of throwing
    if (error.response?.status === 401) {
      return null;
    }
    throw error;
  }
};

export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
};

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return data;
};

