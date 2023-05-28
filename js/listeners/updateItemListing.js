import { updateListingForm, token } from "../components/variables.js";
import { listItemUrl } from "../components/api_endpoint_variables.js";

export function updateListingListener() {
  updateListingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const updateItemForm = event.target;
    const formData = new FormData(updateItemForm);
    const title = formData.get("title");
    const description = formData.get("description");
    const media = [formData.get("media")];
    const endsAt = formData.get("endsAt");

    const updatedItemListingInfo = { title, description, media, endsAt };

    updateItemListing(updatedItemListingInfo);
  });
}

async function updateItemListing(listing) {
  try {
    const updateListingData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listing),
    };

    const response = await fetch(listItemUrl, updateListingData);
    const result = await response.json();

    console.log(result);

    location.reload();
  } catch (error) {
    console.log(error);
  }
}
