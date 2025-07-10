## Project Description

This is a **Rick and Morty Character Detail Page**, a sub-page of the main Rick and Morty Wiki Web App.  
It displays **detailed information** about a specific character using data fetched from the [Rick and Morty API](https://rickandmortyapi.com).

When a user clicks on a character card in the main gallery (`index.html`), they are redirected to this page (`character.html?id=X`).  
The page extracts the character ID from the URL and dynamically loads details such as:
- Name
- Status
- Species
- Gender
- Origin and Last Known Location
- Total Episode Appearances
- Character Image

A live **digital clock** is fixed at the bottom as a functional footer.

Built using only **HTML**, **CSS**, and **Vanilla JavaScript**, this page is lightweight and responsive.

##  Setup Instructions

1. **Prerequisites**
   - Any modern web browser (e.g. Chrome, Firefox)
   - Internet connection (API fetches live data)

2. **File Structure**
   Make sure your folder has the following:
/rick-and-morty-wiki/
├── index.html ← Main character gallery
├── character.html ← Character detail page (this file)
└── README.md

## Challenges Faced
1. Pagination Logic-:
Problem: Handling page navigation correctly while avoiding going below page 1.
Solution: Used conditions before decreasing page count and dynamically called the API with the current page number.

2. API Errors-:
Problem: Sometimes the API throws CORS or rate-limit errors.
Solution: Ensured error handling (to be improved later) and tested with internet connection.

3. Styling Conflicts-:
Problem: Grid layout broke due to incorrect grid-template-columns syntax.
Solution: Fixed it with grid-template-columns: repeat(3, 1fr); inside the #characters style.



