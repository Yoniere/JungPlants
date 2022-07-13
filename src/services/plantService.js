import { storageService } from './storageService.js'
import { makeId } from './utilService.js'

export const plantService = {
    query,
    save,
    remove,
    getById,
    getEmptyPlant,
    // tryRobot
}

const STORAGE_KEY = 'plants'

const gDefaultPlants = [
    { _id: 'r1', name: 'Alocasia Pink Dragon', price: 20, type: 'Indoor', family: 'Aracea', img: '' },
    { _id: 'r2', name: 'Philodendron Paraiso Verde', price: 100, type: 'Indoor', family: 'Aracea', img: '' },
    { _id: 'r3', name: 'Monstera Delciosa Variegata', price: 150, type: 'Indoor', family: 'Aracea', img: '' },
    { _id: 'r4', name: 'Calatea White Fuzen', price: 35, type: 'Indoor', family: 'Marantaceae', img: '' },
]

var gPlants = _loadPlants()

function query(filterBy) {
    let plantsToReturn = gPlants;
    if (filterBy) {
        let { name, price, type, family } = filterBy
        console.log(filterBy)
        price = price || 250
        plantsToReturn = gPlants.filter(plant =>  {return plant.type === type && plant.name.toLowerCase().includes(name.toLowerCase())
            && plant.family.toLowerCase().includes(family.toLowerCase()) && (plant.price < price)}
            
           
        )
    }
    // console.log(plantsToReturn)
    return Promise.resolve([...plantsToReturn]);
}
// function tryRobot(id) {
//     const robot = gRobots.find(robot => robot._id === id)
//     robot.batteryStatus -= 10
//     return Promise.resolve()
// }
function getById(id) {
    const plant = gPlants.find(plant => plant._id === id)
    return Promise.resolve({ ...plant })
}

function remove(id) {
    const idx = gPlants.findIndex(plant => plant._id === id)
    gPlants.splice(idx, 1)
    if (!gPlants.length) gPlants = gDefaultPlants.slice()
    storageService.store(STORAGE_KEY, gPlants)
    return Promise.resolve()
}

function save(plantToSave) {
    if (plantToSave._id) {
        const idx = gPlants.findIndex(plant => plant._id === plantToSave._id)
        gPlants.splice(idx, 1, plantToSave)
    } else {
        plantToSave._id = makeId()
        gPlants.push(plantToSave)
    }
    storageService.store(STORAGE_KEY, gPlants)
    return Promise.resolve(plantToSave);
}



function getEmptyPlant() {
    return {
        name: '',
        price: '',
        type: '',
        family: ''
    }
}

function _loadPlants() {
    let plants = storageService.load(STORAGE_KEY)
    if (!plants || !plants.length) plants = gDefaultPlants
    storageService.store(STORAGE_KEY, plants)
    return plants
}


// function _update(robotToSave) {
//     const idx = gRobots.findIndex(robot => robot._id === robotToSave._id)
//     gRobots.splice(idx, 1, robotToSave)
//     return Promise.resolve(robotToSave)
// }


// function _add(robotToSave) {

// }

