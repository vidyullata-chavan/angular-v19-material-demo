
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

export interface User {
  id:string;
  email:string;
  pictureUrl:string;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}
