// Fetching the JSON file
let books = [];

fetch("books.json")
    .then(response => response.json())
    .then(data => {
        books = data;
        displayBooks();
    })
    .catch(error => console.error("Error loading JSON: ", error));


// Displaying Books
function displayBooks() {
    const tableBody = document.querySelector("#bookTable tbody"); // Selects the table body
    tableBody.innerHTML = ""; // Clears any existing rows
    books.forEach(book => {     // loops through each book in the JSON array
        const row = `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.genre}</td>
        </tr>`;
        tableBody.innerHTML += row;      // Adds the row to the table
    });
}

// Updating Book Information
document.getElementById("updateForm").addEventListener("submit", function(e) {
    e.preventDefault();   // Prevents page reload on form submission
    const title = document.getElementById("updateTitle").value;     // Gets title input
    const author = document.getElementById("updateAuthor").value;   // Gets author input
    const year = parseInt(document.getElementById("updateYear").value);     // Converts year to number
    const genre = document.getElementById("updateGenre").value;     // Gets genre input

    if (!validateInput(title, author, year, genre)) return;

    const book = books.find(b => b.title.toLowerCase() === title.toLowerCase());        // Finds book by title
    if (book) {
        book.author = author;       // Updates author
        book.year = year;           // Updates year
        book.genre = genre;         // Updates genre
        displayBooks();             // Refreshes table with updated data
    } else {
        alert("Book not found.");   // Error if title does not exist
    }
});

// Removing a Book
document.getElementById("removeForm").addEventListener("submit", function(e) {
    e.preventDefault();     // Prevents page reload
    const title = document.getElementById("removeTitle").value;     // Gets title input
    const index = books.findIndex(b => b.title === title);          // Finds index of book
    if (index !== -1) {
        books.splice(index, 1);         // Removes book from array
        displayBooks();                 // Refreshes table
    } else {
        alert("Book not found.");       // Error if title does not exist
    }
});

// Validation
function validateInput(title, author, year, genre) {
    if (!title || !author || !genre || isNaN(year)) {
        alert("Please fill in all fields correctly.");      // Error message
        return false;           // Validation failed
    }
    return true;                // Validtaion passed
}
