//
// Library of Randomness
// bookmarklet.js
//
// Visit a random item in the Library of Congress catalogue (loc.gov).
//



// Only include results with an image online
// (set to false to include everything)
const VISUAL = true;



// Build the API request string
const API = "https://www.loc.gov/search/?q=*&fo=json"
            + (VISUAL ? "&fa=online-format:image" : "");

// Get a random number, up to a maximum
function random(max) {
  return Math.floor(Math.random() * max);
}



// Get the list of all possible items and pages
fetch(API)
.then((t) => t.json())

// Choose a random page of results from all available
// (dividing by 100 to avoid API error)
// TODO remove this fix once the LOC responds to inquiry
.then((t) => fetch(API + "&sp=" + random(t.pagination.total / 100)))
.then((t) => t.json())

// Choose a random item from the results
.then((t) => t.results[random(t.pagination.perpage)].aka)

// Find the item URL and go there
.then((t) => {
  for (i of t) {
    if (i.includes("/item/")) {
      window.location.replace(i);
    }
  }
});
