import { singleItemUrl } from "../components/api_endpoint_variables.js";
import {
  listingsContainer,
  token,
  updateListingDescription,
  updateListingMedia,
  updateListingMedia,
  updateTitle,
  username,
  editingTools
} from "../components/variables";

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

    const response = await fetch(singleItemUrl, listingData);
    const result = await response.json();

    createHTMLForSingleListing(result);
  } catch (error) {
    console.log(error);
  }
}

function createHTMLForSingleListing(listing) {
  const { title, description, media, seller, bids } = listing;
  if (bids.length > 0) {
    const lastBid = bids[bids.lengtj - 1].amount;
    if (media.length === 0) {
      listingsContainer.innerHTML = `
            <h1>${title}</h1>
            <div>
                <div>
                <h4>Seller: </h4>
                </div>
                <div>
                <a href="profile.html?username=${seller.name}" class="nav-link">${seller.name}</a>
                </div>
            </div>
            <p>${description}</p>
            <div>
                <div>
                    <h4>Current bid: <h4>
                </div>
                <div>
                    <h4>${lastBid}<h4>
                </div>
            </div>`;
    } else {
      listingsContainer.innerHTML = `
            <h1>${title}</h1>
            <div>
                <div>
                <h4>Seller: </h4>
                </div>
                <div>
                <a href="profile.html?username=${seller.name}" class="nav-link">${seller.name}</a>
                </div>
            </div>
            <p>${description}</p>
            <div>
                <div>
                    <h4>Current bid: <h4>
                </div>
                <div>
                    <h4>${lastBid}<h4>
                </div>
            </div>`;

      for (let i = 0; i < media.length; i++) {
        const listingImg = document.querySelector(".listing-imgs");
        listingImg.innerHTML += `<img src="${media[i]}" alt="Image for ${title} listing">`;
      }
    } else {
        if(media.length === 0) {
            listingsContainer.innerHTML = `
            <h1>${title}</h1>
            <div>
                <div>
                <h4>Seller: </h4>
                </div>
                <div>
                <a href="profile.html?username=${seller.name}" class="nav-link">${seller.name}</a>
                </div>
            </div>
            <p>${description}</p>
            <div>
                <div>
                    <h4>Current bid: <h4>
                </div>
                <div>
                    <h4>${lastBid}<h4>
                </div>
            </div>`
        }
    }
  }

  updateTitle.value = title;
  updateListingDescription.value = description;
  updateListingMedia.value = media;

  matchSellerWithLoggedInUser(username, seller.name);
}

function matchSellerWithLoggedInUser(username, seller) {
    if (username !== seller) {
        editingTools.style.display = "none";
    }
}
