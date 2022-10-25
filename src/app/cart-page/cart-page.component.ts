import { CartItem } from './../shared/models/Cartitem';
import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }

  ngOnInit(): void {}
  setCart() {
    this.cart = this.cartService.getCart();
  }
  removeFromCart(CartItem: CartItem) {
    this.cartService.removeFromCart(CartItem.food.id);
    this.setCart();
  }
  changeQuantity(CartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(quantity, CartItem.food.id);
    this.setCart();
  }
}
