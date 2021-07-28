import { plantSeeds } from "./tractor.js"
import { createPlan } from "./plan.js"


const yearlyPlan = createPlan()



let plantsInField = plantSeeds(yearlyPlan)

export const addPlant = (seedObj) => {
    plantsInField.push(seedObj)
    return plantsInField
}

export const usePlants = () => {
    return addPlant()
}