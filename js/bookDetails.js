document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get("book"); 
    const books = {
        "book1": {
            title: "100 Things To Know About Space",
            author: "Usborne Books",
            image: "images/book1.jpg",
            synopsis: "Explore 100 fascinating facts about space, from black holes to supernovas...",
            genres: "Science, Nonfiction, Space, Astronomy, Education, Physics",
        },
        "book2": {
            title: "What If? - Randall Munroe",
            author: "Randall Munroe",
            image: "images/book2.jpg",
            synopsis: "A book that answers the most absurd hypothetical science questions...",
            genres: "Science, Nonfiction, Physics, Space, Humor",
        },
        "book3": {
            title: "Astrophysics for Young People in a Hurry",
            author: "Neil deGrasse Tyson",
            image: "images/book3.webp",
            synopsis: "From the basics of physics to big questions about the nature of space and time...",
            genres: "Science, Nonfiction, Space, Children’s, Astronomy, Education, Physics, School",
        },
        "book4": {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "images/book4.jpg",
    synopsis: "A timeless romance novel exploring love, class, and societal expectations in 19th-century England...",
    genres: "Classic, Fiction, Romance, Literature, Historical"
},
"book5": {
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    image: "images/book5.jpg",
    synopsis: "Follow Alice as she falls down the rabbit hole into a world of whimsy and madness...",
    genres: "Fantasy, Fiction, Adventure, Children's, Classic, Literature"
},
"book6": {
    title: "Frankenstein",
    author: "Mary Shelley",
    image: "images/book6.jpg",
    synopsis: "A chilling tale of a scientist who creates life, only to face the horrors of his own making...",
    genres: "Horror, Classic, Fiction, Gothic, Science Fiction, Literature"
},
"book7": {
    title: "The Time Machine",
    author: "H.G. Wells",
    image: "images/book7.jpg",
    synopsis: "A scientist invents a machine that takes him to the distant future, revealing a divided society...",
    genres: "Science Fiction, Classic, Time Travel, Adventure, Literature"
},
"book8": {
    title: "The Metamorphosis",
    author: "Franz Kafka",
    image: "images/book8.jpg",
    synopsis: "A surreal story of Gregor Samsa, who wakes up one morning transformed into a giant insect...",
    genres: "Fiction, Classic, Literature, Philosophy, Psychology, Existentialism"
},
"book9": {
    title: "Moby-Dick",
    author: "Herman Melville",
    image: "images/book9.jpg",
    synopsis: "The epic tale of Captain Ahab’s obsessive quest to hunt the great white whale, Moby Dick...",
    genres: "Classic, Fiction, Adventure, Sea Stories, Literature"
},
"book10": {
    title: "Dracula",
    author: "Bram Stoker",
    image: "images/book10.jpg",
    synopsis: "A gothic horror novel that introduced Count Dracula and established modern vampire lore...",
    genres: "Horror, Classic, Gothic, Fiction, Vampires, Literature"
},
"book11": {
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    image: "images/book11.jpg",
    synopsis: "A collection of thrilling detective stories featuring the brilliant Sherlock Holmes and Dr. Watson...",
    genres: "Mystery, Classic, Fiction, Crime, Detective, Literature"
}

    };

    const bookDetailsSection = document.querySelector(".book-details");

    if (bookId && books[bookId]) {
        const book = books[bookId];

        bookDetailsSection.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            
            <div class="book-content">
                <h1>${book.title}</h1>
                <h2>Author: ${book.author}</h2>
                <hr>
                
                <h3>Synopsis / Overview:</h3>
                <p>${book.synopsis}</p>
                
                <h3>Genres:</h3>
                <p>${book.genres}</p>
                
                <div class="button-group">
                    <button id="download-btn">Download Book</button>
                    <button id="start-reading-btn">Start Reading</button>
                </div>
            </div>
        `;

        const startReadingBtn = document.getElementById("start-reading-btn");

        if (startReadingBtn) {
            startReadingBtn.addEventListener("click", function () {
                window.location.href = `reader.html?book=${bookId}`;
            });
        }
    } else {
        bookDetailsSection.innerHTML = "<h2>Book not found</h2>";
    }
});
