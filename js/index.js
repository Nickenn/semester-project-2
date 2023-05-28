import { setLogoutListener } from "../js/listeners/userLogout.js";
import { loginButton, token, profileLink } from "./components/variables.js";

setLogoutListener();

if (token) {
  loginButton.innerHTML = `<button class="btn btn-btn-danger">Logout</button>`;
} else {
  profileLink.style.display = "none";
}
