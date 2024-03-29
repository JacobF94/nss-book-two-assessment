const flowers = [
    {
        id: 1,
        color: "white",
        species: "rose",
        price: 0.90
    },
    {
        id: 2,
        color: "red",
        species: "tulip",
        price: 1.10
    }
]
const addFlower = (flowerObject) => {
    const lastIndex = flowers.length - 1
    const currentLastFlower = flowers[lastIndex]
    const maxId = currentLastFlower.id
    const idForNewFlower = maxId + 1

    flowerObject.id = idForNewFlower
    flowers.push(flowerObject)
}

const sunflower = {
    color: "yellow",
    species: "sun flower",
    price: 5.25
}
 addFlower(sunflower)
 
const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code
    for (const flower of flowers) {
        if (flower.price >= 1) {
            expensiveFlowers.push(flower)
        }
    }

    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */
    console.log(expensiveFlowers)
    return expensiveFlowers  // Do not change this code
}

findExpensiveFlowers()

// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}