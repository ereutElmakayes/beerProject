import { BeerItem } from "../../../entities/BeerItem";

export default interface BeerItemProps {
    history: any,
    item: BeerItem
    showRank ?:boolean
}