import { setLogoutListener } from "../js/listeners/userLogout.js";
import { loginButton, token, profileLink } from "./components/variables";

setLogoutListener();

if (token) {
  loginButton.innerHTML = `<i class="fa-sharp fa-solid fa-right-from-bracket"></i> Logout`;
} else {
  profileLink.style.display = "none";
}
