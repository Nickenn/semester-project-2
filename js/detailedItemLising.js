import { fetchSingleListing } from "./handlers/singleListing.js";
import { updateListingListener } from "./listeners/updateItemListing.js";
import { deleteListingListener } from "./listeners/deleteItem.js";
import { setItemBidListener } from "./listeners/itemBid.js";
import { fetchBidsOnListing } from "./listeners/viewBids.js";

fetchSingleListing();
updateListingListener();
deleteListingListener();
setItemBidListener();
fetchBidsOnListing();
