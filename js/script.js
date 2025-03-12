document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    function showSlides(n) {
        
        if (n >= slides.length) {
            slideIndex = 0;
        } else if (n < 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex = n;
        }

        slides.forEach((slide, i) => {
            slide.style.opacity = "0";
            slide.style.transition = "opacity 1s ease-in-out";
        });
        dots.forEach(dot => dot.classList.remove("active"));

        slides[slideIndex].style.opacity = "1";
        dots[slideIndex].classList.add("active");
    }

    function nextSlide() {
        showSlides(slideIndex + 1);
    }

    function prevSlide() {
        showSlides(slideIndex - 1);
    }

    function currentSlide(n) {
        showSlides(n);
    }


    let slideInterval = setInterval(() => {
        nextSlide();
    }, 4000);


    document.querySelector(".slideshow").addEventListener("mouseenter", () => {
        clearInterval(slideInterval);
    });

    document.querySelector(".slideshow").addEventListener("mouseleave", () => {
        slideInterval = setInterval(() => {
            nextSlide();
        }, 4000);
    });

    
    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);

  
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentSlide(index);
        });
    });

    showSlides(slideIndex);
});


document.addEventListener("DOMContentLoaded", function () {
    const ebooksBtn = document.getElementById("ebooks-btn");
    const videosBtn = document.getElementById("videos-btn");
    const booksSection = document.getElementById("books-section");
    const videosSection = document.getElementById("videos-section");
    booksSection.style.display = "flex";
    booksSection.classList.add("active-section");
    videosSection.style.display = "none";

    function switchContent(showSection, hideSection) {
        hideSection.classList.remove("active-section");
        hideSection.classList.add("fade-out"); 
        setTimeout(() => {
            hideSection.style.display = "none"; 
            showSection.style.display = "flex";
            showSection.classList.remove("fade-out");
            showSection.classList.add("active-section");
        }, 300);
    }

    ebooksBtn.addEventListener("click", function () {
        ebooksBtn.classList.add("active");
        videosBtn.classList.remove("active");
        switchContent(booksSection, videosSection);
    });

    videosBtn.addEventListener("click", function () {
        videosBtn.classList.add("active");
        ebooksBtn.classList.remove("active");
        switchContent(videosSection, booksSection);
    });

    document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const bookTitle = params.get("book");

    console.log("Book title from URL:", bookTitle); 


    const books = {
        "100 Things To Know About Space": {
            image: "images/book1.jpg",
            description: "Explore 100 fascinating facts about space, from black holes to supernovas.",
        },
        "What If? - Randall Munroe": {
            image: "images/book2.jpg",
            description: "A book that answers the most absurd hypothetical science questions.",
        },
        "Astrophysics for Young People": {
            image: "images/book3.webp",
            description: "An introduction to astrophysics, written for young readers.",
        }
    };

 
    console.log("Books data:", books);
    console.log("Book exists:", books[bookTitle] ? "Yes" : "No");

    if (bookTitle && books[bookTitle]) {
        document.getElementById("book-title").textContent = bookTitle;
        document.getElementById("book-image").src = books[bookTitle].image;
        document.getElementById("book-image").alt = bookTitle;
        document.getElementById("book-description").textContent = books[bookTitle].description;
    } else {
        document.getElementById("book-info").innerHTML = "<h2>Book not found</h2>";
    }

});
});