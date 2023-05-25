import { userListingsContainer, token } from "../components/variables";
import { profileListingsUrl } from "../components/api_endpoint_variables";
// import { renderListingsHTML }

export async function getProfileListings() {
  try {
    const userdata = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(),
    };

    const response = await fetch(profileListingsUrl, userdata);
    const result = response.json();

    console.log(result);

    renderListingsHTML(result);
  } catch (error) {
    console.log(error);
  }
}
