import { BeerItem } from "../../../entities/BeerItem";

export default interface BeerPopupProps {
    popupData: BeerItem;
    showRank ?:boolean
}