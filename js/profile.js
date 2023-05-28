import { fetchProfile } from "./handlers/userProfile.js";
import { getProfileListings } from "./handlers/userListings.js";
import { setNewListItemListener } from "./listeners/listItem.js";
import { updateProfileAvatarListener } from "./listeners/updateAvatar.js";
import { renderActiveListings } from "./listeners/filterListings.js";

fetchProfile();
updateProfileAvatarListener();
setNewListItemListener();
renderActiveListings();
