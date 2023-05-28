import {
  userListingsContainer,
  token,
  listingsParam,
} from "../components/variables";
import { activeListingsUrl } from "../components/api_endpoint_variables.js";
// import { renderHtmlForListings } from "../renders/renderListings.js";
// import { getProfileListings } from "../handlers/userListings.js";

export function renderActiveListings() {
  if (listingsParam) {
    getActiveListings();
  } else {
    getListings();
  }
}

async function getActiveListings() {
  try {
    const userData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(),
    };

    const response = await fetch(activeListingsUrl, userData);
    const result = await response.json();

    console.log(result);

    renderHtmlForListings(result, userListingsContainer);
  } catch (error) {
    console.log(error);
  }
}
