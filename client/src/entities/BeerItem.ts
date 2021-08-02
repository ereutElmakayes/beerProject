export class BeerItem{
    abv: number;
    attenuation_level:  number;
    brewers_tips: string;
      contributed_by:string;
    description: string;
    ebc:  number;
    first_brewed: string;
    food_pairing:string[];
    ibu:  number;
    id:  number;
    image_url: string;
    name: string;
    ph:number;
    srm: number;
    tagline:string;
    target_fg: number;
    target_og: number;
    favorite: boolean;
    rank: number;
    constructor(args?: Partial<BeerItem>) {
      if (typeof args !== 'undefined' && typeof args === 'object') {
        Object.assign(this, args);
      } 
      this.favorite = false;
      this.rank = 0;
    }
}