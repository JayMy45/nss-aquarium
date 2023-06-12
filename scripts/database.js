/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        { name: "Nemo", species: "Clownfish", length: 5, food: "Hamburger", location: 'Cairo', image: 'https://i.pinimg.com/originals/50/e2/a0/50e2a0bdde0faadf63f337e32cd68b3e.jpg' },
        { name: "Bart", species: "Mandarinfish", length: 2, food: "French Fries", location: 'Charleston, SC', image: 'https://30a.com/wp-content/uploads/2021/12/Untitled-design-2.png' },
        { name: "Dori", species: "Regal Tang", length: 8, food: "Baked Chicken", location: 'Cairo', image: 'https://www.liveaquaria.com/images/categories/large/lg_73746_Blue_Tang.jpg' },
        { name: "Nomencleture", species: "Clownfish", length: 10, food: "Fried Chicken", location: 'Charleston, SC', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5zNJfVQZtvtZb38oPzjcojULqmU5grNfyw&usqp=CAU' },
        { name: "Circuit", species: "Queen Angelfish", length: 3, food: "Pizza", location: 'Mumbai, Maharashtra', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Queen_Angelfish.jpg/640px-Queen_Angelfish.jpg' },
        { name: "Cuitie", species: "Scup", length: 7, food: "Onion Rings", location: 'Visakhapatnam, Andhra Pradesh', image: 'https://safmc.net/wp-content/uploads/2022/01/scup-porgy.png' },
        { name: "BlueBlue", species: "Regal Tang", length: 10, food: "Lemon Slices", location: 'Visakhapatnam, Andhra Pradesh', image: 'https://www.liveaquaria.com/images/categories/large/lg_73746_Blue_Tang.jpg' },
        { name: "Beam", species: "Annular Seabream", length: 12, food: "Lettuce", location: 'Cairo', image: 'https://live.staticflickr.com/1928/44183213104_50c2a55f31_b.jpg' },
        { name: "Middy", species: "Clownfish", length: 11, food: "Tomato", location: 'Charleston, SC', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg/640px-Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg' },
        { name: "Tang", species: "Orange-lined Triggerfish", length: 6, food: "Sushi Hold the Fish", location: 'Bekalfort Beach, Kerala', image: 'https://live.staticflickr.com/65535/51758453421_38464f356d_b.jpg' },
        { name: "Brie", species: "Orange-lined Triggerfish", length: 15, food: "Taco", location: 'Bekalfort Beach, Kerala', image: 'https://live.staticflickr.com/65535/51758453421_38464f356d_b.jpg' },
        { name: "Jay", species: "Scup", length: 8, food: "Brisket", location: 'Bekalfort Beach, Kerala', image: 'https://safmc.net/wp-content/uploads/2022/01/scup-porgy.png' },
        { name: "Canteen", species: "Clownfish", length: 4, food: "Big T's BBQ", location: 'Hurghada', image: 'https://i.pinimg.com/originals/50/e2/a0/50e2a0bdde0faadf63f337e32cd68b3e.jpg' },
        { name: "CartWheel", species: "Queen Angelfish", length: 1, food: "Coffee", location: 'San Diego, CA', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Queen_Angelfish.jpg/640px-Queen_Angelfish.jpg' },
        { name: "Crusty", species: "Clownfish", length: 2, food: "Lady Grey Tea", location: 'Laguna Beach, CA', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg/640px-Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg' },
        { name: "Lori", species: "Regal Tang", length: 8, food: "Ice Cream", location: 'Charleston, SC', image: 'https://www.liveaquaria.com/images/categories/large/lg_73746_Blue_Tang.jpg' },
        { name: "LutherUK", species: "Clownfish", length: 2, food: "Cookies", location: 'Mumbai, Maharashtra', image: 'https://i.pinimg.com/originals/50/e2/a0/50e2a0bdde0faadf63f337e32cd68b3e.jpg' },
    ]
}

export const getFish = () => {
    return database.fish.map((fish) => ({ ...fish }))
}