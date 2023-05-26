import { username, idParam } from "../components/variables.js";

const API_BASE_URL = "https://api.noroff.dev/api/v1/auction/";

// Authentication

export const registerUrl = `${API_BASE_URL}auth/register`;
export const loginUrl = `${API_BASE_URL}auth/login`;

// My profile

export const profileUrl = `${API_BASE_URL}profiles/${username}`;
export const profileMediaUrl = `${profileUrl}/media`;
export const profileListingsUrl = `${profileUrl}/listings`;

// Listings

export const listingsUrl = `${API_BASE_URL}listings?per_page=100&_active=true&_bids=true`;
export const listItemUrl = `${API_BASE_URL}listings`;

// Single listing

export const singleItemUrl = `${listItemUrl}/${idParam}?_seller=true&_bids=true`;
export const updateListingsUrl = `${listingsUrl}/${idParam}`;

// User bids

export const userBidsUrl = `${listItemUrl}/${idParam}/bids?_bids=true`;