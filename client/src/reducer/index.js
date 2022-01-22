const initialState = {
    dogs: [],
    allDogs: [], //estado que siempre mantiene todas las rzas de perros
    temperaments: [],
    dogsDetails: [],
    dogDelete: [],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case 'GET_DOGS_NAME':
            // console.log(action.payload)
            return {
                ...state,
                dogs: action.payload,
            }

        case 'GET_DOGS':
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }

        case 'GET_TEMPERAMENTS':

            // console.log(temperamentByName)
            // console.log(action.payload)
            return {
                ...state,
                temperaments: action.payload
            }
        case 'FILTER_DOGS_BY_TEMPERAMENT':
            const allDoguies = state.dogs
            const tempDogs = allDoguies.filter(dog => {
                if(dog.temperaments){ // info viene como [{name:..},{name:..},{name:..}]
                    const temperament = dog.temperaments.map( dog => dog.name)
                    return temperament.includes(action.payload)}
                if (dog.temperament) { //info viene como string
                    return dog.temperament.includes(action.payload)
                }
                return null
            })

            return {
                ...state,
                dogs: action.payload === 'sinFiltro' ? allDoguies : tempDogs,

            }

        case 'POST_DOGS':  //No se declara en actions, se declara en el reducer. en action solo se trae la ruta
            return {
                ...state,
            }

        case 'GET_DETAILS_DOG':
            
            return {
                ...state,
                dogsDetails: action.payload
            }

        case 'FILTER_DOGS_BY_CREATED':
            const allDogsAPI = state.allDogs
            const createdDogs = action.payload === 'created' ? allDogsAPI.filter(dog => dog.createInBd) : allDogsAPI.filter(dog => !dog.createInBd)
            return {
                ...state,
                dogs: action.payload === 'all' ? allDogsAPI : createdDogs
            }

        case 'ORDER_BY_NAME':
            const allDogs = state.allDogs
            const sortArr = action.payload === 'asc' ?
                [...state.dogs].sort((a, b) => {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                    return 0;
                }) :
                [...state.dogs].sort((a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                    return 0;
                })
            return {
                ...state,
                dogs: action.payload === 'all' ? allDogs : sortArr,
            }
        case 'ORDER_BY_WEIGHT':
            const allDogs2 = state.allDogs
            const allDogsFilter = state.dogs.filter(dog => dog.weight_min !== null)
            const sortWeightMin = action.payload === 'asc' ?
                allDogsFilter.sort((a, b) => {
                    if (a.weight_min < b.weight_min) return -1;
                    if (a.weight_min > b.weight_min) return 1;
                    return 0;
                }) :
                allDogsFilter.sort((a, b) => {// se usa sord para ordenar de mayor a menor
                    if (a.weight_min > b.weight_min) return -1;
                    if (a.weight_min < b.weight_min) return 1;
                    return 0;
                })
            return {
                ...state,
                dogs: action.payload === "all" ? allDogs2 : sortWeightMin
            }

        default:
            return state;
       
    } 
}

