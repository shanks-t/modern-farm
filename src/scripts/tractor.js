import { createAsparagus } from "./seeds/asparagus.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createPlan } from "./plan.js"
// export const plantSeeds = (arr, arr[i], func) => {
// let result = {}
//    if (arr[i] === "Corn")  {
//         result = {type: "Corn", height: "180",output: "6"}
//     } else {
//         for (let i=0; i<arr.length; i++) {
//             for (let j=0; j<arr[i].length; j++) {
//                 if (arr[i] === arr[i]) {
//                      result = func(arr[i])
//                 }
//             }
//         }
//     }
//     return result
// }
const yearlyPlan = createPlan()
const asparagus = createAsparagus()
const corn = createCorn()
const soybean = createSoybean()
const potato = createPotato()
const wheat = createWheat()
const sunflower = createSunflower()


    

export const plantSeeds = (arr) => {
let result = []
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr[i].length; j++) {
            //console.log(arr[i][j])
           if (arr[i][j] === 'Corn') {
            result.push({type: "Corn", height: 180,output: 6}) 
            } else if (arr[i][j] === 'Asparagus') {
                result.push(asparagus)
            } else if (arr[i][j] === 'Wheat') {
                result.push(wheat)
            } else if (arr[i][j] === 'Soybean') {
                result.push(soybean)
            } else if (arr[i][j] === 'Sunflower') {
                result.push(sunflower)
            } else (arr[i][j] === 'Potato') 
                result.push(potato)
            }
        }
        return result
    }
        
    
    


