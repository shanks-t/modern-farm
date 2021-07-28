import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"

const yearlyPlan = createPlan()
const plantsInField = plantSeeds(yearlyPlan)

const seeds = harvestPlants(plantsInField)
console.log("seeds: ", seeds)


// const asparagus = createAsparagus()
// const corn = createCorn()
// const soybean = createSoybean()
// const potato = createPotato()
// const wheat = createWheat()
// const sunflower = createSunflower()


 
console.log("plants: ", plantsInField)



// console.log("yearlyPlan: ", yearlyPlan)


// let plants = []

// const plant = plantSeeds(yearlyPlan, "Corn", createCorn)

// console.log("Plant: ", plant)

// plants.push(plant)

// console.log("plants: ", plants)

// const seeds = harvestPlants(plants)
// console.log(seeds)


// const plants = plantSeeds(yearlyPlan)
// console.log("plants: ", plants)