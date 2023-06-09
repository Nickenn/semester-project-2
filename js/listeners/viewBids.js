import { bidModal, bidModalBtn, token } from "../components/variables.js";
import { listItemUrl } from "../components/api_endpoint_variables.js";
import { renderHtmlForBidsModal } from "../renders/modalRenderer.js";

export async function fetchBidsOnListing() {
  try {
    const listingsData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(),
    };

    const response = await fetch(listItemUrl, listingsData);
    const result = await response.json();

    console.log(result);

    renderHtmlForBidsModal(result);
    showModal();
    closeModal();
  } catch (error) {
    console.log(error);
  }
}

function showModal() {
  bidModalBtn.addEventListener("click", () => {
    bidModal.style.display = "block";
  });
}

function closeModal() {
  bidModal.addEventListener("click", () => {
    bidModal.style.display = "none";
  });
}
