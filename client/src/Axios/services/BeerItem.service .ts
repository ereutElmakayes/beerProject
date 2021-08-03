import axios from 'axios';
import { BeerItem } from '../../entities/BeerItem';



class BeerItemService {
    async getAll(): Promise<BeerItem[]> {
        try {
            let beers: BeerItem[] = [];
            const res = await axios.get('https://api.punkapi.com/v2/beers');
            res.data.map((r: any, i: number) => {
                beers.push(new BeerItem({
                    ...r
                }));
            })
         return beers;
        } catch (err) {
            throw err;
        }
    }

    async getAllBySearchInput(searchInput: string): Promise<BeerItem[]> {
        try {
            let beers: BeerItem[] = [];
            const res = await axios.get('https://api.punkapi.com/v2/beers?food='+searchInput);
            res.data.map((r: any, i: number) => {
                beers.push(new BeerItem({
                    ...r
                }));
            })
         return beers;
        } catch (err) {
            throw err;
        }
    }

}

export default new BeerItemService as BeerItemService;