const btn = document.getElementById("btn")
let food = document.getElementById("food")
let guests = document.getElementById("num-input")
const vegetarian = document.getElementById("vegetarian-input")

btn.addEventListener("click", function() {
    if (vegetarian.checked) {
        food.textContent = "Tofu Turkey!"
    } else if (guests.value >= 5) {
        food.textContent = "duck, duck, Goose!"
    } else {
        food.textContent = "something alcoholic 🍸"
    }
})

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.

