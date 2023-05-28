import { deleteBtn, token, listingsContainer, bidForm } from "../components/variables.js";
import { updateListingsUrl } from "../components/api_endpoint_variables";

export function deleteListingListener() {
    deleteBtn.addEventListener("click", (event) => {
        if(confirm(`Are you certain you want to delete this listing?`) === true) {
            deleteListing();
            deleteListingSuccess();
            setTimeout(relocateToProfile, 2000);
        }
    })
}

async function deleteListing() {
    try {
        const deleteListingData = {
            method: "DELETE",
            Headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify();
        }

        const response = await fetch(updateListingsUrl, deleteListingData);
        const result = await response.json();

        console.log(result);

    } catch (error) {
        console.log(error);
    }
}

function relocateToProfile() {
    location.href = "profile.html";
}

function deleteListingSuccess() {
    listingsContainer.innerHTML = `<div class="pb-4 mb-4"><h1 class="pb-5 mb-5">Your item was successfully deleted.</h1></div>`;
    bidForm.style.display = "none";
}