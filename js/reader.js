document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get("book");

    const bookTitle = document.getElementById("book-title");
    const bookText = document.getElementById("book-text");
    const books = {
        "book1": {
            title: "100 Things To Know About Space",
            content: "This is the first chapter of '100 Things To Know About Space'. Explore fascinating facts about space!"
        },
        "book2": {
            title: "What If? - Randall Munroe",
            content: "Ever wondered what would happen if you hit a baseball at the speed of light? Read on to find out!"
        },
        "book3": {
            title: "Astrophysics for Young People",
            content: "Neil deGrasse Tyson explains astrophysics in a fun way! Learn about black holes, time travel, and more."
        }
    };

    if (bookId && books[bookId]) {
        bookTitle.textContent = books[bookId].title;
        bookText.textContent = books[bookId].content;
    } else {
        bookTitle.textContent = "Book Not Found";
        bookText.textContent = "Sorry, we couldn't find the book you're looking for.";
    }
});
