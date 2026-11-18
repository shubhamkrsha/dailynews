
// Get article ID from the URL
const urlParams = new URLSearchParams(window.location.search);

const articleId = Number(urlParams.get("id"));

// News article data
const articles = [
    {
        id: 1,
        title: "India News Headline One",
        category: "INDIA",
        description: "Latest updates and developments from across India.",
        image: "images/news1.jpg"
    },
    {
        id: 2,
        title: "Business News Headline Two",
        category: "BUSINESS",
        description: "Latest business and financial market updates.",
        image: "images/news2.jpg"
    },
    {
        id: 3,
        title: "Technology News Headline Three",
        category: "TECHNOLOGY",
        description: "Discover the latest technology and AI developments.",
        image: "images/news3.jpg"
    },
    {
        id: 4,
        title: "Indian Sports News",
        category: "SPORTS",
        description: "Latest updates from Indian sports and athletes.",
        image: "images/sports.jpg",
    },
    {
        id: 5,
        title: "Latest Political Developments in India",
        category: "POLITICS",
        description: "Important political updates and government decisions from across India.",
        image: "images/politics.jpg"
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

// Find selected article
const selectedArticle = articles.find(function (article) {
    return article.id === articleId;
});

// Display article details
if (selectedArticle) {

    document.getElementById("articleImage").src = selectedArticle.image;

    document.getElementById("articleCategory").textContent =
        selectedArticle.category;

    document.getElementById("articleTitle").textContent =
        selectedArticle.title;

    document.getElementById("articleContent").textContent =
        selectedArticle.description;

} else {

    document.getElementById("articleTitle").textContent =
        "Article Not Found";

    document.getElementById("articleContent").textContent =
        "Sorry, this article does not exist.";

}
