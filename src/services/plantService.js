import { storageService } from './storageService.js'
import { makeId } from './utilService.js'
import { httpService } from './http.service.js'

export const plantService = {
    query,
    save,
    remove,
    getById,
    getEmptyPlant,
    // tryRobot
}

// const STORAGE_KEY = 'plants'
const ENDPOINT = 'plant'
// const gDefaultPlants = [
//     { _id: 'r1', name: 'Alocasia Pink Dragon', price: 20, type: 'Indoor', family: 'Aracea', img: 'https://res.cloudinary.com/ddhuvtrpp/image/upload/v1657702529/JungPlants%20Project/rare_alocasia_pink_dragon_1608281978_15a1d27e_w8wfh6.jpg' },
//     { _id: 'r2', name: 'Philodendron Paraiso Verde', price: 100, type: 'Indoor', family: 'Aracea', img: 'https://res.cloudinary.com/ddhuvtrpp/image/upload/v1657702554/JungPlants%20Project/HT5PpqDYXdmjqWoiq0doOAuslpGyQMbj_mshocj.jpg' },
//     { _id: 'r3', name: 'Monstera Delciosa Variegata', price: 150, type: 'Indoor', family: 'Aracea', img: 'https://res.cloudinary.com/ddhuvtrpp/image/upload/v1657702569/JungPlants%20Project/variegated-monstera-deliciosa-07_p7n891.webp' },
//     { _id: 'r4', name: 'Calatea White Fuzen', price: 35, type: 'Indoor', family: 'Marantaceae', img: 'https://res.cloudinary.com/ddhuvtrpp/image/upload/v1657702600/JungPlants%20Project/Calathea-White-Fusion-1_isiozk.jpg' },
// ]

// var gPlants = _loadPlants()

// function query(filterBy) {
//     let plantsToReturn = gPlants;
//     if (filterBy) {
//         let { name, price, type, family } = filterBy
//         console.log(plantsToReturn)
//         price = price || 250
//         plantsToReturn = plantsToReturn.filter(plant => {
//             return plant.name.toLowerCase().includes(name.toLowerCase())
//                 && plant.family.toLowerCase().includes(family.toLowerCase())
//                 && (plant.price < price)
//                 && plant.type === type
//         }
//         )
//     }
//     return Promise.resolve([...plantsToReturn]);
// }

async function query(filterBy) {
    try {
        return await httpService.get(ENDPOINT, filterBy)
    } catch {
        console.error('cannot load plants')
    }
}




// function tryRobot(id) {
//     const robot = gRobots.find(robot => robot._id === id)
//     robot.batteryStatus -= 10
//     return Promise.resolve()
// }
// function getById(id) {
//     const plant = gPlants.find(plant => plant._id === id)
//     return Promise.resolve({ ...plant })
// }

async function getById(id) {
    try {
        console.log(id)
        return await httpService.get(`${ENDPOINT}/${id}`, id)
    } catch {
        console.error('cannot load plant')
    }
}

// function remove(id) {
//     const idx = gPlants.findIndex(plant => plant._id === id)
//     gPlants.splice(idx, 1)
//     if (!gPlants.length) gPlants = gDefaultPlants.slice()
//     storageService.store(STORAGE_KEY, gPlants)
//     return Promise.resolve()
// }

async function remove(id) {
    try {
        return await httpService.delete(`${ENDPOINT}/${id}`, id)
    } catch {
        console.error('cannot delete plant')
    }
}

// function save(plantToSave) {
//     if (plantToSave._id) {
//         const idx = gPlants.findIndex(plant => plant._id === plantToSave._id)
//         gPlants.splice(idx, 1, plantToSave)
//     } else {
//         plantToSave._id = makeId()
//         gPlants.push(plantToSave)
//     }
//     storageService.store(STORAGE_KEY, gPlants)
//     return Promise.resolve(plantToSave);
// }

async function save(plant) {
    try {
        if (plant.id) {

            return await httpService.put(`${ENDPOINT}/${plant.id}`, plant)
        } else {
            return await httpService.post(ENDPOINT, plant)
        }
    } catch {
        console.error('cannot delete plant')
    }
}



function getEmptyPlant() {
    return {
        name: '',
        price: '',
        type: '',
        family: ''
    }
}

// function _loadPlants() {
//     let plants = storageService.load(STORAGE_KEY)
//     if (!plants || !plants.length) plants = gDefaultPlants
//     storageService.store(STORAGE_KEY, plants)
//     return plants
// }


// function _update(robotToSave) {
//     const idx = gRobots.findIndex(robot => robot._id === robotToSave._id)
//     gRobots.splice(idx, 1, robotToSave)
//     return Promise.resolve(robotToSave)
// }


// function _add(robotToSave) {

// }

