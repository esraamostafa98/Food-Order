import { CartItem } from './Cartitem';

export class Cart {
  items: CartItem[] = [];

  get totalPrice(): number {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  }
  get totalProduct(): number {
    let totalProduct = 0;
    this.items.forEach((item) => {
      totalProduct += item.quantity;
    });
    return totalProduct;
  }
}
