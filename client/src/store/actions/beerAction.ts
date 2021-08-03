
import { BeerItem } from '../../entities/BeerItem';
import BeerItemService from './../../Axios/services/BeerItem.service ';

export const GET_BEERS = 'GET_BEERS';
export const UPDATE_BEER = "UPDATE_BEER";
export const GET_FAVORITE_BEERS = "GET_FAVORITE_BEERS";
export const UPDATE_BEER_POPUP = "GET_FAVORITE_BEERS";
export const REMOVE_ALL_BEERS= "REMOVE_ALL_BEERS";
export const UPDATE_ACTIVE_PAGE= "UPDATE_ACTIVE_PAGE"




export const getBeers = () => {
    return async (dispatch: any) => {
        try {
            let beers;
                const res = await BeerItemService.getAll();
               beers = res;
            
            
            dispatch({ type: GET_BEERS, value: beers })
        } catch (err: any) {
            console.log(err)
        }
    }
}
export const searchBeers = (searchInput: string) => {
    return async (dispatch: any) => {
        try {
            let beers;
       
            if( searchInput && searchInput != ''){
                const res = await BeerItemService.getAllBySearchInput(searchInput);
                beers = res;
            }
            
            dispatch({ type: GET_BEERS, value: beers })
        } catch (err: any) {
            console.log(err)
        }
    }
}
export const updateBeer = (beer : BeerItem , beers : BeerItem[]) => {

    const _beers = beers.map( (b : BeerItem ) => {
        if(beer.id === b.id){
            b = {...beer}
        }
        return b
    })
    return {type: UPDATE_BEER , value :[..._beers] }
}
export const updateBeerPopup = (beer : BeerItem) => {
    return {type: UPDATE_BEER_POPUP , value :beer}
}
export const getFavoriteBeers = ( beers : BeerItem[]) => {

    const favoriteBeers = beers.filter(beer=> beer.favorite)
    return {type: GET_FAVORITE_BEERS , value :favoriteBeers }
}
export const removeAllFavoriteBeers = (beers : BeerItem[]) => {
    const _beers = beers.map( (b : BeerItem ) => {
      b.favorite = false;
        return b;
    })
    return {type: REMOVE_ALL_BEERS , value :[..._beers] }
}  
export const updateActivePage = (page: number) => {
    return {type: UPDATE_ACTIVE_PAGE , value :page }
} 