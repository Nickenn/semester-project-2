export const profileLink = document.querySelector(".profile-nav");

// Home page

export const listingsContainer = document.querySelector(".listings-container");
export const listingsTitle = document.querySelector(".listings-title");
export const listingsImg = document.querySelector(".listings-img");
export const listingForm = document.querySelector(".listings-form");
export const listingsBids = document.querySelector(".listings-bids");
export const loading = document.querySelector(".loading");

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
export const creditInfo = document.querySelector(".credit-info");
export const updateAvatarForm = document.querySelector(".update-avatar-form");
export const userListingsContainer = document.querySelector(
  ".user-listings-container"
);

// Login/logout

export const loginButton = document.querySelector(".login-button");
export const footerLogin = document.querySelector(".footer-login");

// Localstorage

export const token = localStorage.getItem("token");
export const username = document.querySelector("username");

// Search

export const searchDesktop = document.querySelector("#search-desktop-form");
export const searchMobile = document.querySelector("#search-form");

// Item specific listing

export const listingContainer = document.querySelector(".listing-container");
export const deleteBtn = document.querySelector(".delete-btn");
export const bidForm = document.querySelector(".bid-form");
export const editingTools = document.querySelector(".editing-tools");
export const bidMessage = document.querySelector(".bid-message");
export const bidModal = document.querySelector(".modal");
export const bidModalBtn = document.querySelector(".view-bids-btn");

// Params

const params = new URLSearchParams(window.location.search);
export const idParam = params.get("id");
export const usernameParam = params.get("username");
export const listingsParam = params.get("listings");

// Update listing

export const updateListingForm = document.querySelector(".update-listing-form");
export const updateTitle = document.querySelector(".update-listing-title");
export const updateDescription = document.querySelector("#description");
export const updateMedia = document.querySelector("#media");
