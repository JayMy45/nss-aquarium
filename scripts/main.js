import { getFish } from './database.js'
import { FishList } from './FishList.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}


// Import the FishList function from the correct module
// import { FishList } from './FishList.js'  *****AlREADY AT THE TOP OF THE PAGE******

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fish__list")
parentHTMLElement.innerHTML = FishList()

// document.querySelector(".fishList").innerHTML = FishList()