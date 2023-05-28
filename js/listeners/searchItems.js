import {
  listingsContainer,
  desktopSearch,
  mobileSearch,
  loading,
} from "../components/variables";
import { renderSearchResult } from "../renders/renderSearchResult.js";

export function searchListings(listings) {
  desktopSearch.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredSearch = listings.filter(function (listings) {
      if (listings.title.toLowerCase().includes(searchValue)) {
        return true;
      }
    });
    renderSearchResult(filteredSearch);
  };
  mobileSearch.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredSearch = listings.filter(function (listings) {
      if (listings.title.toLowerCase().includes(searchValue)) {
        return true;
      }
    });
    renderSearchResult(filteredSearch);
  };
}
