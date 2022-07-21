import { plantService } from "../../services/plantService"


export function loadPlants() {
    return async (dispatch,getState) => {
        try {
            const { filterBy } = getState().plantModule
            const plants = await plantService.query(filterBy)
            dispatch({type: 'SET_PLANTS', plants})
        } catch (err) {
            console.log('err',err)
        }
    }
}

export function removePlant(plantId) {
    return async (dispatch) => {
        try {
            await plantService.remove(plantId)
            dispatch({type:'REMOVE_PLANT',plantId})
        } catch (err) {
            console.log ('err',err)
        }
    }
}

export function setFilterBy(filterBy) {
    return async (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
        // console.log(dispatch,filterBy)
    }
}

export function addPlant(plant) {
    return async (dispatch) => {
        try {
           await plantService.save(plant)
            dispatch({type: 'ADD_PLANT', plant})
        } catch (err) {
            console.log('err',err)
        }
    }
}

export function updatePlant(plant) {
    return async (dispatch) => {
        try {
           await plantService.save(plant)
            dispatch({type: 'UPDATE_PLANT', plant})
        } catch (err) {
            console.log('err',err)
        }
    }
}
