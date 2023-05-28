import { token, loginButton } from "../components/variables.js";

export function setLogoutListener() {
  loginButton.addEventListener("click", () => {
    logOut();
  });
}

/**
 * Logs out user by clearing local storage.
 */

function logOut() {
  localStorage.clear();
}
