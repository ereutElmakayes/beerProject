import { useEffect, useState, Fragment, useCallback } from 'react';
import MyBeerProps from './MyBeerProps';
import '../../../App.scss'
import './MyBeer.scss'
import { useSelector, useDispatch } from 'react-redux';
import Beer from '../../content/Beer/BeerItem';
import { getBeers, searchBeers, updateActivePage } from '../../../store/actions/beerAction';
import SearchBox from '../../core/SearchBox/SearchBox';
import Pagination from "react-js-pagination";
const MyBeer = (props: MyBeerProps) => {

    const { history } = props;
    const [searchInput, setSearchInput] = useState('');
    const { beers, activePage } = useSelector((state: any) => state.main)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBeers())
    }, [])
    const searchHandler = (event: any) => {
        console.log('SEARCHING...')
        setSearchInput(event.target.value)
    }
    const search = () => {
        if(searchInput && searchInput != '')
        dispatch(searchBeers(searchInput));
    }
    const handlePageChange = (page: number) => {
        dispatch(updateActivePage(page));
    }
    const getBeersByPage = () => {  
    if(beers){
     if( (activePage-1)*10 + 10 < beers?.length ){
         return beers.slice((activePage-1)*10, (activePage-1)*10 + 10);
     } else{
        return beers.slice((activePage-1)*10, beers.length -1);
     }
    } else {
        return[];
    }
    
    }
    if (beers) {
        return (
            <Fragment>
             <div className="d-flex align-items-center w-100">
            <SearchBox placeholder={'Food Pairing'} changeHandler={searchHandler} value={searchInput} /> 
            <button className="btn" onClick={search}>Search</button>
            </div>
            <div className="my-beers">
                {getBeersByPage().map((item: any, index: number) => (
                    <Beer item={item} history={history}   key={index}  /> ))}
            </div>
         
            <Pagination
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={beers?.length}
            pageRangeDisplayed={10}
            onChange={handlePageChange}
             />
            
            </Fragment>
        )
    } else {
   return null;
}
}

export default MyBeer;