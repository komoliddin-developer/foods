let headerLink = document.querySelectorAll(".header__link")
let headerCards = document.querySelector(".header__cards")
let headerCard = document.querySelector(".header__cards")
let container = document.querySelector(".container")
let headerNone = document.querySelector(".header__none")

const url = "https://www.themealdb.com/api/json/v1/1/random.php"
const host = "www.themealdb.com/api/json/v1/1"

// ES6 fetch orqali


for (let i = 0; i < 12; i++) {
    fetch(url).then(res => {
        if (res.ok) return res.json();
    }).then(data => {
        // console.log(data);
    for (let i = 0; i < meals.length; i++) {
        let headerCard = document.createElement("div")
        headerCard.classList.add("header__card")
        headerCard.innerHTML = `
                        <img src="${data.meals[i].strMealThumb}" alt="" class="header__img">
                        <div class="title__block">
                            <h2 class="header__title">${data.meals[i].strCategory}</h2>
                            <a href="#!" class="header__link">More</a>
                        </div>
        `
        headerCards.append(headerCard)
        
    }
    headerCard.addEventListener("click" , () => {
        headerNone.classListadd("active")
        container = document.createElement("div")
        headerNone.innerHTML = `
            <img src="${data.meals[i].strMealThumb}" alt="" class="header__none-img">
            <div class="title__block">
                <h2 class="header__none-title">${data.meals[i].strCategory}</h2>
                <h2 class="header__none-title1">${data.meals[i].strIngredient1}</h2>
                <a href="${data.meals[i].strSource}" class="header__none-link">Source</a>
                <a href="${data.meals[i].strYoutube}" class="header__none-link1">Watch</a>
            </div>
        `
        conteniar.append(headerNone)

    })
    })
}

// ES6 fetch orqali

// ES7 async orqali

async function meals(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

meals(url).then(data => {
    console.log(data);
})

// ES7 async orqali