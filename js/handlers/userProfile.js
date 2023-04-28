import { profileUrl } from "../components/api_endpoint_variables.js";
import {
  token,
  profileUsername,
  userCredits,
  userAvatar,
} from "../components/variables.js";

export async function fetchProfile() {
  try {
    const userData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(profileUrl, userData);
    const result = response.json();

    console.log(result);
    createHtmlForUserProfile(result);
  } catch (error) {
    console.log(error);
  }
}

function createHtmlForUserProfile(userProfileInfo) {
  const { name, avatar, credits } = userProfileInfo;
  userAvatar.innerHTML = `<img class="img-thumbnail p-0" src="${avatar}" alt="User profile avatar for ${name}">`;
  profileUsername.innterText = name;
  userCredits.innerText = credits;
}
