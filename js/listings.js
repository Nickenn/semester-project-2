import { fetchListings } from "./handlers/activeListings.js";
import { setNewListItemListener } from "./listeners/listItem.js";

setNewListItemListener();
fetchListings();
