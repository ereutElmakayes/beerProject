import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateBeer } from '../../../store/actions/beerAction';
import './BeerPopup.scss';
import BeerPopupProps from './BeerPopupProps';


const BeerPopup = (props: BeerPopupProps) => {
 const { beers } = useSelector((state:any) => state.main)
 const {popupData, showRank} = props;
 const dispatch = useDispatch();
 const handleChange = (event: any) => {
    popupData.rank = parseInt(event.target.value);
    dispatch(updateBeer(popupData , beers));
}
 const getRank = () => {
   if(showRank)
   return (<div className="rank">
       Rank: <select value={popupData.rank} onChange={handleChange}>
           <option value={1}>1</option>
           <option value={2}>2</option>
           <option value={3}>3</option>
           <option value={4}>4</option>
           <option value={5}>5</option>
       </select>
   </div>)
    return null;
}
    return (

        <div className="beer-popup" >
            <div>{popupData?.name}</div>
           <img className="image-item" src={popupData.image_url} alt="beer" />
           <div className="beer-details">
                {popupData?.description}
                <hr/>
                id: {popupData?.id}
                <hr/>
                first brewed: {popupData?.first_brewed}
            </div>
    
            {getRank()}
    </div>
    )
}

export default BeerPopup;