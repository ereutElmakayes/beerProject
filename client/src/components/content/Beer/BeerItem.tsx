import './BeerItem.scss';
import star from '../../../assets/images/star.png';
import blackStar from '../../../assets/images/blackStar.png';
import BeerItemProps from './BeerItemProps';
import { updateBeer } from '../../../store/actions/beerAction';
import { useDispatch } from 'react-redux';
import { BeerItem } from '../../../entities/BeerItem';
import { useSelector } from 'react-redux';
import BeerPopup from '../BeerPopup/BeerPopup';
import { setModalChild, setModalState } from '../../../store/actions/modalActions';

const Beer = (props: BeerItemProps) => {

    const { item, showRank  } = props;
    const { beers } = useSelector((state:any) => state.main)

    const dispatch = useDispatch();
    const clickFavorite = (event: any, beer: BeerItem) => {
        event.stopPropagation();
        beer.favorite = !beer.favorite;
        dispatch(updateBeer(beer , beers));
    }
    const showBeerPopup = (item: BeerItem) => {
        dispatch(setModalState(true))
        dispatch(setModalChild(<BeerPopup popupData={item} showRank={showRank}/>));

    }
    return (
        <div className="beer-item" onClick={()=> showBeerPopup(item)}>
            <div className="wrapper">
                <div className="details-row">
                    <img className="image-item" src={item.image_url} alt="beer" />
                 <img className="star-icon" src={item.favorite ? star: blackStar}  alt="star-icon" 
                 onClick={(event) => clickFavorite(event, item)} />
             
                    <div className="summary">
                        <div className="title">
                           {item.name}
                        </div>
                   
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Beer;
