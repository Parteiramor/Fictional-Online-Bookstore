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
        tableBody.innerHTML += row;
    });
}

// Updating Book Information
document.getElementById("updateForm").addEventListener("submit", function(e) {
    e.preventDefault();   // Prevents page reload on form submission
    const title = document.getElementById("updateTitle").value;     // Gets title input
    const author = document.getElementById("updateAuthor").value;   // Gets author input
    const year = parseInt(document.getElementById("updateTitle").value);     // Converts year to number
    const genre = document.getElementById("updateGenre").value;     // Gets genre input

    const book = books.find(b => b.title === title);        // Finds book by title
    if (book) {
        book.author = author;       // Updates author
        book.year - year;           // Updates year
        book.genre = genre;         // Updates genre
        displayBooks();             // Refreshes table with updated data
    } else {
        alert("Book not found.");      // Error if title does not exist
    }
});

// Removing a Book
document.getElementById("removeForm").addEventListener("submit", function(e) {
    e.preventDefault();     // Prevents page reload
    const title = document.getElementById("removeTitle").value;     // Gets title input
    const index = books.findIndex(b => b.title === title);          // Finds index of book
    if (index !== -1) {
        books.splice(index, 1);         // Removes book from array
        displayBooks();                 // refreshes table
    } else {
        alert("Book not found.");       // Error if title does not exist
    }
});

// Validation
function validateInput(title, author, year, genre) {
    if (titel || !author || !genre || isNaN(year)) {
        alert("Please fill in all fields correctly.");      // Error message
        return false;           // Validation failed
    }
    return true;                // Validtaion passsed
}
