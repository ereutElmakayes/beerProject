import { Fragment, useEffect, useState } from 'react';
import MyBeerProps from './FavoriteProps';
import '../../../App.scss'
import './Favorite.scss'
import { useSelector, useDispatch } from 'react-redux';
import Beer from '../../content/Beer/BeerItem';
import { getFavoriteBeers, removeAllFavoriteBeers } from '../../../store/actions/beerAction';
import Swal from 'sweetalert2'
const Favorite = (props: MyBeerProps) => {

    const { history } = props;
    // const [searchInput, setSearchInput] = useState('');
    const { beers, favoriteBeers } = useSelector((state: any) => state.main)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFavoriteBeers(beers))
    }, [])


    const removeFavoriteBeers = () => {
        dispatch(removeAllFavoriteBeers(beers));
    }
 
    const openConfirmPopup = () => {
        Swal.fire({
            title: 'Are you sure you want to delete all items?',
            showDenyButton: true,
            confirmButtonText: `Yes`,
            denyButtonText: `No`,
          }).then((result) => {
            if (result.isConfirmed) {
                removeFavoriteBeers()
            } 
          })
    }
    

    if (favoriteBeers?.length > 0) {
        return (
            <Fragment>
            <button className="btn" onClick={openConfirmPopup}>Remove All</button>
            <div className="favorite-beers">   
                {favoriteBeers.map((item: any, index: number) => (
                    <Beer item={item} history={history}   key={index}  showRank={true}/>
                ))}
            </div>
            </Fragment>
        )
    } else {
   return null;
}
}

export default Favorite;