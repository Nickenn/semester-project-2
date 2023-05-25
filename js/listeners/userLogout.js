import { token, loginButton } from "../components/variables.js";

export function setLogoutListener() {
  loginButton.addEventListener("click", () => {
    logOut();
  });
}

function logOut() {
  localStorage.clear();
}
