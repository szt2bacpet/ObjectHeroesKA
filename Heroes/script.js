const heroes = [
    { firstName: "Ahsoka", lastName: "Tano", job: "padawan" },
    { firstName: "Boba", lastName: "Fett", job: "fejvadász" },
    { firstName: "Han", lastName: "Solo", job: "csempész" },
    { firstName: "Leia", lastName: "Organa", job: "szenátor" },
    { firstName: "Péter", lastName: "Bácskai", job: "tanuló" }
];

// Function to render the heroes using template literals
function renderHeroes() {
    const heroesContainer = document.getElementById("heroes-container");
    heroesContainer.innerHTML = "";
    
    heroes.forEach(hero => {
        const heroCard = `
            <div class="hero-card">
                <h2>${hero.firstName} ${hero.lastName}</h2>
                <p>Job: ${hero.job}</p>
            </div>
        `;
        heroesContainer.innerHTML += heroCard;
    });
}

function addHero(firstName, lastName, job) {
    const newHero = { firstName, lastName, job };
    heroes.push(newHero);
    renderHeroes();
}


renderHeroes();
