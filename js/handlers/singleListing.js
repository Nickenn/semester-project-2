import { listingItemUrl } from "../components/api_endpoint_variables.js";
import { token } from "../components/variables.js";
import { renderHtmlForSpecificListing } from "../renders/singleListingRenderer.js";

export async function fetchSingleListing() {
  try {
    const listingData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(),
    };

    const response = await fetch(listingItemUrl, listingData);
    const result = await response.json();

    renderHtmlForSpecificListing(result);
  } catch (error) {
    console.log(error);
  }
}
