import { profileMediaUrl } from "../components/api_endpoint_variables.js";
import { updateAvatarForm, token } from "../components/variables.js";

export function updateProfileAvatarListener() {
  updateAvatarForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const updateAvatarForm = event.target;
    const formData = new FormData(updateAvatarForm);
    const updatedAvatar = Object.fromEntries(formData.entries());

    updatedProfileAvatar(updatedAvatar);
  });
}

async function updatedProfileAvatar(avatar) {
  try {
    const avatarData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(avatar),
    };

    const response = await fetch(profileMediaUrl, avatarData);
    const result = await response.json();

    console.log(result);

    location.reload();
  } catch (error) {
    console.log(error);
  }
}
