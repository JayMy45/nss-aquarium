/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        { fish: "Nemo", name: "Clownfish", size: 5 },
        { fish: "Bart", name: "Mandarinfish", size: 2 },
        { fish: "Dori", name: "Regal Tang", size: 8 },
        { fish: "Nomencleture", name: "Clownfish", size: 10 },
        { fish: "Arti", name: "Sheepshead", size: 11 },
        { fish: "Circuit", name: "Queen Angelfish", size: 3 },
        { fish: "Sheepy", name: "Sheepshead", size: 5 },
        { fish: "Cuitie", name: "Scup", size: 7 },
        { fish: "BlueBlue", name: "Regal Tang", size: 10 },
        { fish: "Beam", name: "Annular Seabream", size: 12 },
        { fish: "Middy", name: "Clownfish", size: 11 },
        { fish: "Tang", name: "Orange-lined Triggerfish", size: 6 },
        { fish: "Brie", name: "Orange-lined Triggerfish", size: 15 },
        { fish: "Jay", name: "Scup", size: 8 },
        { fish: "Canteen", name: "Clownfish", size: 4 },
        { fish: "CartWheel", name: "Sheepshead", size: 1 },
        { fish: "Crusty", name: "Clownfish", size: 2 },
        { fish: "Lori", name: "Regal Tang", size: 8 },
        { fish: "LutherUK", name: "Clownfish", size: 2 },
    ]
}

export const getFish = () => {
    return database.fishes.map((fish) => ({ ...fish }))
}