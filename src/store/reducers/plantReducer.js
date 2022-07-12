const INITIAL_STATE = {
    plants:null,
    filterBy:null
}

export function plantReducer(state = INITIAL_STATE,action) {
    switch (action.type) {
        case 'SET_PLANTS':
            return {
                ...state,
                plants: action.plants
            }
        case 'ADD_PLANT':
            return {
                ...state,
                plants:[...state.plants,action.plant]
            }
        case 'REMOVE_PLANT':
            return {
                ...state,
                plants:state.plants.filter (plant=> plant._id !== action.plandId)
            }
        case 'UPDATE_PLANT':
            return {
                ...state,
                plants: state.plants.map(plant =>plant._id === action.plant._id ? action.plant : plant)
            }
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: {...action.filterBy}
            }
        default:
            return state;
    }
}