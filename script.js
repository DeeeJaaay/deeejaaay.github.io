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

// Theme switching code
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('switchButton').addEventListener('click', function() {
        var themeStylesheet = document.getElementById('themeStylesheet');
        var restaurantIcon = document.getElementById('restaurantIcon');
        var gif = document.getElementById('gif');
        
        if (themeStylesheet.getAttribute('href') === 'styles.css') {
            themeStylesheet.setAttribute('href', 'styles2.css');
            restaurantIcon.outerHTML = '<img id="restaurantIcon" src="steamyburger.gif" alt="Restaurant Icon" style="width:48px;height:48px;">';
            gif.outerHTML = <img src="babydanc.gif">
        } else {
            themeStylesheet.setAttribute('href', 'styles.css');
            restaurantIcon.outerHTML = '<i id="restaurantIcon" class="material-icons" style="font-size:48px;color:#007B66;">restaurant</i>';
        }
    });
});
