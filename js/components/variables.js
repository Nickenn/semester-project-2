export const profileLink = document.querySelector(".profile-nav");

// Home page

export const listingsContainer = document.querySelector(".listings-container");
export const listingsTitle = document.querySelector(".listings-title");
export const listingsImg = document.querySelector(".listings-img");
export const listingsForm = document.querySelector(".listings-form");
export const listingsBids = document.querySelector(".listings-bids");

// Account creation page

export const registrationForm = document.querySelector(".registration-form");
export const registrationFormSuccess = document.querySelector(
  ".registration-success"
);

// Login form

export const loginForm = document.querySelector(".login-form");

// My profile page

export const profileUsername = document.querySelector(".username");
export const userAvatar = document.querySelector(".user-avatar");
export const updateAvatar = document.querySelector(".update-avatar");
export const userCredits = document.querySelector(".user-credits");
export const updateAvatar = document.querySelector(".update-avatar-form");
export const userListingsContainer = document.querySelector(
  ".user-listings-container"
);

// Login/logout

export const loginButton = document.querySelector(".login-button");
export const footerLogin = document.querySelector(".footer-login");

// Localstorage

export const token = localStorage.getItem("token");
export const username = document.querySelector("username");

// Item specific listing

export const specificListingContainer = document.querySelector(
  ".specific-listing-container"
);
export const deleteBtn = document.querySelector("delete-btn");
export const bidForm = document.querySelector(".bid-form");
export const editingTools = document.querySelector(".editing-tools");

// Params

const params = new URLSearchParams(window.location.search);
export const idParam = params.get("id");
export const usernameParam = params.get("username");

// Update listing

export const updateListingForm = document.querySelector(".update-listing-form");
export const updateTitle = document.querySelector(".update-listing-title");
export const updateListingDescription = document.querySelector(
  ".update-listing-description"
);
export const updateListingMedia = document.querySelector(
  ".update-listing-media"
);
