import { userBidUrl } from "../components/api_endpoint_variables.js";
import { token, bidForm, bidMessage } from "../components/variables";

export function setItemBidListener() {
  bidForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const bidForm = event.target;
    const formData = new FormData(bidForm);
    const bidData = [object.fromEntries(formData.entries())];
    const bid = bidData.map(({ amount }) => +amount);

    bidOnItem({ amount: bid[0] });
  });
}

async function bidOnItem(bid) {
  try {
    const bidData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bid),
    };

    const response = await fetch(userBidUrl, bidData);
    const result = await response.json();

    console.log(result);

    if (response.ok) {
      successMessage();
      setTimeout(reloadPage, 5000);
    } else {
      if (!token) {
        bidMessage.innerText = `Sorry! You must be logged in to bid on an item.`;
        bidMessage.innerHTML = `<a href="login.html" class="btn btn-secondary">login</a> or <a href="registrer.html" class="btn btn-secondary">registrer</a> here.`;
      } else if (response.status === 403) {
        bidMessage.innerText = `Sorry, you cannot bid on your own item listing.`;
      } else {
        bidMessage.innerText = `Sorry! your bid must be higher than your previous bid, and you must have sufficient credits.`;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function successMessage() {
  bidMessage.innerText = `Thank you! Your bid has been accepted`;
}

function reloadPage() {
  location.reload();
}
