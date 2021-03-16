import { Product } from './product';

export class CartItem {
  id: number;
  name: string;
  dimension2: string;
  img: string;
  price: number;
  quantity: number;
  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.dimension2 = product.dimension2;
    this.img = product.img;
    this.price = product.price;
    this.quantity = product.quantity;
  }
}
