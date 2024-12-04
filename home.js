const stars = document.querySelectorAll(".star");
const ratingDisplay = document.getElementById("rating");
const reviewText = document.getElementById("review");
const submitBtn = document.getElementById("submit");
const goodReviewsContainer = document.getElementById("good-reviews");
const badReviewsContainer = document.getElementById("bad-reviews");

let goodReviews = [
    "Great food and excellent service!",
    "The flavors were amazing, will definitely order again!",
    "Best dining experience I've had in a while.",
    "Loved the variety of dishes available.",
    "The delivery was prompt and the food was hot.",
    "Absolutely delicious, highly recommend!",
    "The portion sizes were generous.",
    "Fantastic customer service!",
    "The ambiance was lovely.",
    "Every dish was a delight!",
    "The spices were perfectly balanced.",
    "I enjoyed every bite!",
    "The dessert was to die for!",
    "Great value for money.",
    "I can't wait to come back!",
    "The chef really knows how to cook!",
    "I was impressed with the presentation.",
    "The ingredients tasted fresh.",
    "A wonderful experience overall.",
    "I loved the unique menu options.",
    "The staff was very friendly.",
    "I appreciate the attention to detail.",
    "The drinks were refreshing.",
    "The atmosphere was cozy.",
    "I will definitely recommend this place to my friends."
];

let badReviews = [
    "The food was cold when it arrived.",
    "I found the service to be lacking.",
    "The flavors were not what I expected.",
    "The wait time was too long.",
    "I was disappointed with the portion sizes."
];

let userRating = 0;

// Display initial good reviews
goodReviews.forEach(review => {
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    reviewElement.textContent = review;
    goodReviewsContainer.appendChild(reviewElement);
});

// Display initial bad reviews
badReviews.forEach(review => {
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    reviewElement.textContent = review;
    badReviewsContainer.appendChild(reviewElement);
});

// Star rating functionality
stars.forEach(star => {
    star.addEventListener("click", () => {
        userRating = star.getAttribute("data-value");
        ratingDisplay.textContent = userRating;

        // Highlight selected stars
        stars.forEach(s => {
            s.classList.remove("selected");
        });
        for (let i = 0; i < userRating; i++) {
            stars[i].classList.add("selected");
        }
    });
});

// Submit review functionality
submitBtn.addEventListener("click", () => {
    const review = reviewText.value.trim();
    if (review === "") {
        alert("Please write a review before submitting.");
        return;
    }

    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    reviewElement.textContent = `Rating: ${userRating}/5 - ${review}`;
    
    // Add the review to the appropriate section based on rating
    if (userRating >= 3) {
        goodReviewsContainer.appendChild(reviewElement);
        goodReviews.push(review);
    } else {
        badReviewsContainer.appendChild(reviewElement);
        badReviews.push(review);
    }

    // Clear the input fields
    reviewText.value = "";
    ratingDisplay.textContent = "0";
    userRating = 0;
    stars.forEach(star => {
        star.classList.remove("selected");
    });
});