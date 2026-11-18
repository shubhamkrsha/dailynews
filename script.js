

// =================================
// DAILYNEWS ARTICLES DATA
// =================================

const newsArticles = [

    {
        id: 1,
        title: "India News Headline One",
        category: "india",
        description: "Latest updates and developments from across India.",
        image: "images/news1.jpg",
        imageAlt: "Indian city"
    },


    {
        id: 2,
        title: "Business News Headline Two",
        category: "business",
        description: "Latest business and financial market updates.",
        image: "images/news2.jpg",
        imageAlt: "Stock market"
    },

    {
        id: 3,
        title: "Technology News Headline Three",
        category: "technology",
        description: "Discover the latest technology and AI developments.",
        image: "images/news3.jpg",
        imageAlt: "Artificial intelligence technology"
    },

    {
        id: 4,
        title: "Indian Sports News",
        category: "sports",
        description: "Latest updates from Indian sports and athletes.",
        image: "images/sports.jpg",
        imageAlt: "Indian sports news"
    },

    {
        id: 5,
        title: "Latest Political Developments in India",
        category: "politics",
        description: "Important political updates and government decisions from across India.",
        image: "images/politics.jpg",
        imageAlt: "Indian political news"
    },

    {
        id: 6,
        title: "India Launches New Digital Initiative",
        category: "india",
        description: "The government introduces new digital services to improve public access.",
        image: "images/digital-india.jpg",
        imageAlt: "Digital India initiative"
    },

    {
        id: 7,
        title: "Indian Cricket Team Prepares for Next Series",
        category: "sports",
        description: "Indian players begin preparations for their upcoming international series.",
        image: "images/cricket.jpg",
        imageAlt: "Indian cricket news"
    },

    {
        id: 8,
        title: "AI Technology Continues to Grow",
        category: "technology",
        description: "New developments in artificial intelligence are transforming industries.",
        image: "images/ai-industry.jpg",
        imageAlt: "Artificial intelligence"
    }

];

const newsContainer = document.getElementById("newsContainer");

function displayNews() {


    newsContainer.innerHTML = "";

    newsArticles.forEach(function (news) {

        const newsCard = document.createElement("article");

        newsCard.classList.add("news-card");

        newsCard.dataset.category = news.category;

        newsCard.innerHTML = `
            <img src="${news.image}" alt="${news.imageAlt}">
            <span>${news.category.toUpperCase()}</span>
            <h3>${news.title}</h3>
            <p>${news.description}</p>
            <a href="article.html?id=${news.id}">Read More</a>
        `;

        newsContainer.appendChild(newsCard);

    });


}

displayNews();




const searchInput = document.getElementById("searchInput");

const filterButtons = document.querySelectorAll(".filter-btn");

// Selected category
let selectedCategory = "all";

// Function to filter news
function filterNews() {

    const searchValue = searchInput.value.toLowerCase();

    // Select cards whenever filtering happens
    const newsCards = document.querySelectorAll(".news-card");

    newsCards.forEach(function (card) {

        const newsText = card.textContent.toLowerCase();

        const cardCategory = card.dataset.category;

        const matchesSearch = newsText.includes(searchValue);

        const matchesCategory =
            selectedCategory === "all" ||
            cardCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}

// Search functionality
searchInput.addEventListener("input", filterNews);

// Category filtering
filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        selectedCategory = button.dataset.category;

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        filterNews();

    });

});



// Get HTML elements
const dateElement = document.getElementById("currentDate");

const timeElement = document.getElementById("currentTime");


// Function to update date and time
function updateDateTime() {

    const now = new Date();

    // Format date
    const dateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Kolkata"
    };

    const currentDate = now.toLocaleDateString(
        "en-IN",
        dateOptions
    );


    // Format time
    const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata"
    };

    const currentTime = now.toLocaleTimeString(
        "en-IN",
        timeOptions
    );


    // Display on website
    dateElement.textContent = currentDate;

    timeElement.textContent = currentTime;

}


// Update immediately
updateDateTime();


// Update every second
setInterval(updateDateTime, 1000);



// Breaking News Ticker

const breakingNewsText = document.getElementById(
    "breakingNewsText"
);

// Sample news headlines
const breakingHeadlines = [

    "India announces new technology initiatives.",

    "Indian businesses see growth in digital payments.",

    "New developments in India's space research.",

    "Indian athletes prepare for upcoming tournaments.",

    "Technology sector continues to expand in India."

];

// Starting headline index
let headlineIndex = 0;


// Function to change headlines
function updateBreakingNews() {

    // Fade out
    breakingNewsText.style.opacity = 0;

    setTimeout(function () {

        // Move to next headline
        headlineIndex++;

        // Return to first headline
        if (headlineIndex >= breakingHeadlines.length) {
            headlineIndex = 0;
        }

        // Update headline
        breakingNewsText.textContent =
            breakingHeadlines[headlineIndex];

        // Fade in
        breakingNewsText.style.opacity = 1;

    }, 300);

}


// Change headline every 5 seconds
setInterval(updateBreakingNews, 5000);


// Hamburger Menu

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");



// Open and close menu
menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("open");

    const isOpen = navMenu.classList.contains("open");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});

// Header navigation functionality
const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        // Prevent default anchor navigation
        event.preventDefault();

        // Get category from href
        const category = link.getAttribute("href").substring(1);

        // Select category
        selectedCategory = category === "home" ? "all" : category;

        // Update active category button
        filterButtons.forEach(function (button) {

            button.classList.toggle(
                "active",
                button.dataset.category === selectedCategory
            );

        });

        // Filter news
        filterNews();

        // Close mobile menu
        navMenu.classList.remove("open");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

    });

});