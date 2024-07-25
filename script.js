const restaurants = [
    "Restaurant A",
    "Restaurant B",
    "Restaurant C",
    // Add more restaurant names here
];

const pickButton = document.getElementById("pickButton");
const resultElement = document.getElementById("result");

pickButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];
    resultElement.textContent = `You should try ${randomRestaurant}!`;
});
