const restaurants = [
"Stensätra Pizzeria",
"Kebab House",
"Royal Thai",
"ESA",
"Österns Pärla",
"Sibylla",
"McDonalds",
"Verona",
"Aga Grillen",
"Piccolo Mondo",
"Amorinen",
"Sorrento",
"Hackörven",
"Subway",
"Aqua",
"Bolaget",
"Jernet",
"Fredrik på Hörnet",
"Mias Grill",
"Tzatziki",
"Kanalkioksen",
"Järnverkskoisken",
"Aldo's",
"Storsjömässen",
"Trebo",
"Asian Takeaway",
"Jensas",
"Matkällan",
"Torggrillen",
"Mjölkbaren",
"Maharane",
"Grillhuset",
"LaFiorita(Palaia)",
"Oden",
"Barrsätra Pizzeria",
"Annexet Grillkök",
"Sushi Corner",
"Sandviken Sushi",
"Viking Pizzeria",
"Högbo Köket",
"Heat Express",
"American Pizza Place"
    // Add more restaurant names here
];

const pickButton = document.getElementById("pickButton");
const resultElement = document.getElementById("result");

pickButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];
    resultElement.textContent = `Ni borde prova ${randomRestaurant}!`;
});

document.getElementById('switchButton').addEventListener('click', function() {
    var themeStylesheet = document.getElementById('themeStylesheet');
    if (themeStylesheet.getAttribute('href') === 'styles1.css') {
        themeStylesheet.setAttribute('href', 'styles2.css');
    } else {
        themeStylesheet.setAttribute('href', 'styles1.css');
    }
});
