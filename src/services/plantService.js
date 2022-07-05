import { storageService } from './storageService.js'
import { makeId } from './utilService.js'

export const plantService = {
    query,
    // save,
    remove,
    getById,
    // getEmptyRobot,
    // tryRobot
}

const STORAGE_KEY = 'plants'

const gDefaultPlants = [
    { _id: 'r1', name: 'Alocasia Pink Dragon', price: 20, type: 'Indoor',family:'Aracea',img:'' },
    { _id: 'r2', name: 'Philodendron Paraiso Verde', price: 100, type: 'Indoor',family:'Aracea',img:'' },
    { _id: 'r3', name: 'Monstera Delciosa Variegata', price: 150, type: 'Indoor',family:'Aracea',img:'' },
    { _id: 'r4', name: 'Calatea White Fuzen', price: 35, type: 'Indoor',family:'Marantaceae',img:'' },
]

var gPlants = _loadPlants()

function query(filterBy) {
    let plantsToReturn = gPlants;
    // if (filterBy) {
    //     var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy
    //     maxBatteryStatus = maxBatteryStatus || Infinity
    //     minBatteryStatus = minBatteryStatus || 0
    //     robotsToReturn = gRobots.filter(robot => robot.type.toLowerCase().includes(type.toLowerCase()) && robot.model.toLowerCase().includes(model.toLowerCase())
    //         && (robot.batteryStatus < maxBatteryStatus)
    //         && robot.batteryStatus > minBatteryStatus)
    // }
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

// function save(robotToSave) {
//     if (robotToSave._id) {
//         const idx = gRobots.findIndex(robot => robot._id === robotToSave._id)
//         gRobots.splice(idx, 1, robotToSave)
//     } else {
//         robotToSave._id = makeId()
//         robotToSave.batteryStatus = 100
//         gRobots.push(robotToSave)
//     }
//     storageService.store(STORAGE_KEY, gRobots)
//     return Promise.resolve(robotToSave);
// }



// function getEmptyRobot() {
//     return {
//         model: '',
//         type: ''
//     }
// }

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

