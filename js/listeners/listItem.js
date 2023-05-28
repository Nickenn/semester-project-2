import { listItemUrl } from "../components/api_endpoint_variables";
import { listingForm, token } from "../components/variables.js";

export function setNewListItemListener() {
    listingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const listingForm = event.target;
        const formData = new FormData(listingForm);

        const title = formData.get("title");
        const description = formData.get("description");
        const media = [formData.get("media")];
        const endsAt = formData.get("endsAt");

        if (media[0] !==``) {
            const listing = {
                title,
                media,
                description, 
                endsAt
            }¨
            newItemListing(listing);
        } else {
            const listing = {
                title, 
                description, 
                endsAt
            }
            newItemListing(listing);
        }
    })
}

async function newItemListing(listing) {
    try {
        const itemData = {
            method: "POST",
            headers: = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(listing)
        }

        const response = await fetch(listItemUrl, itemData);
        const result = await response.json();

        console.log(result);

        location.reload();

    } catch (error) {
        console.log(error);
    }
} 