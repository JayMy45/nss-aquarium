// Import the function that returns a copy of the fish array

import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<section>'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string? Interpolation!
        htmlString += `<div class="fish_card">
            <div class="fish__img-div"><img  class="fish__image image--card" src="${fish.image}" width="120" height="120" /></div>
            <div class="fish__name"><u>${fish.name}</u></div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Size: ${fish.length}</div>
            <div class="fish__location">Location: ${fish.location}</div>
            <div class="fish__diet">Food: ${fish.food}</div>
        </div>
`
    }
    htmlString += `</section>`

    return htmlString
}