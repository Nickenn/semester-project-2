import { username } from "../components/variables.js";

const API_BASE_URL = "https://api.noroff.dev/api/v1/auction/";

// Authentication

export const registerUrl = `${API_BASE_URL}auth/register`;
export const loginUrl = `${API_BASE_URL}auth/login`;

// My profile

export const profileUrl = `${API_BASE_URL}profiles/${username}`;
export const profileMediaUrl = `${profileUrl}/media`;
