import { Switch, Route } from "react-router-dom";
import Modal from '../core/Modal/Modal';
import { useSelector } from 'react-redux';
import MyBeer from "../screens/MyBeer/MyBeer";
import Favorite from "../screens/Favorite/Favorite";
import BeerPopup from "../content/BeerPopup/BeerPopup";

const Routes = () => {

    // const {  showBeerPopup } = useSelector((state: any) => state.main)
    const {  isOpen } = useSelector((state: any) => state.modal)
    return (
        <div className="page">
            <Switch>
                <Route path='/' exact component={MyBeer}></Route>
                <Route path='/favorite' exact component={Favorite}></Route>
            </Switch>
            <Modal show={isOpen}>
            </Modal>
        </div>
    )
}

export default Routes;