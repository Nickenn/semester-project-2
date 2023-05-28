import { registerUrl } from "../components/api_endpoint_variables";
import {
  registrationForm,
  registrationFormSuccess,
} from "../components/variables";

export function setUserRegistrationListener() {
  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const registrationForm = event.target;
    const formData = new FormData(registrationForm);
    const userData = Object.fromEntries(formData.entries());

    registerNewUser(userData);
  });
}

/**
 * Registrers new user
 * @param { object } user The registrered user data that is sent to the API.
 */

async function registerNewUser(user) {
  try {
    const userData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const response = await fetch(registerUrl, userData);
    const result = await response.json();

    console.log(result);

    if (result.statusCode !== 400) {
      registrationFormSuccess.innerText = `Your account has been created!`;
    } else {
      registrationFormSuccess.innerText = `An error has occured. Please try again.`;
    }
  } catch (error) {
    console.log(error);
  }
}
