
import { BeerItem } from '../../entities/BeerItem';
import { GET_BEERS, GET_FAVORITE_BEERS, UPDATE_BEER_POPUP, UPDATE_BEER, REMOVE_ALL_BEERS, UPDATE_ACTIVE_PAGE } from '../actions/beerAction';


const initialState:beerReducerState = {
    showBeerPopup: false,
    beers: [],
    favoriteBeers: [],
    beerPopupData: undefined,
    activePage: 1
}

const beerReducer = (state = initialState, action: any) => {
    switch (action.type) {
  
        case GET_BEERS:
            return {
                ...state,
                beers: action.value
            }
        case UPDATE_BEER:
            return {
                ...state,
                beers : action.value
            }
            case GET_FAVORITE_BEERS:
                return {
                    ...state,
                    favoriteBeers : action.value
                }
            case UPDATE_BEER_POPUP:
                 return {
                    ...state,
                    beerPopupData : action.value
                 }
            case REMOVE_ALL_BEERS:
                return {
                    ...state,
                    beers : action.value,
                    favoriteBeers: []
                 }
                 case UPDATE_ACTIVE_PAGE:
                    return {
                        ...state,
                        activePage : action.value,
                     }
        default:
            return state;
    }
}

export interface beerReducerState {
    beers: BeerItem[],
    favoriteBeers: BeerItem[],
    showBeerPopup: boolean,
    beerPopupData: BeerItem | undefined,
    activePage: number
}


export default beerReducer;