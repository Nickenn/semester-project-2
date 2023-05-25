import { loginUrl } from "../components/api_endpoint_variables.js";
import { loginForm } from "../components/variables.js";

export function setLoginListener() {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const loginForm = event.target;
        const formData = new FormData(loginForm);
        const userLoginInfo = object.fromEntries(formData.entries());

        userLogin(loginUrl, userLoginInfo);
    });
}


async function userLogin(url, info) {
    try {
        const userInfo = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
        };

        const respone = await fetch(url, userInfo);
        const result = await respone.json();
        const token = result.accessToke;
        const username = result.name;
        const credits = result.credits;

        console.log(result):

        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("credits", credits);

        if(token) {
            window.location.href = "profile.html";
        }
    } catch (error) {
        console.log(error);
    }
}