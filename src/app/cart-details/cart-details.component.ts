import { Component, OnInit } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails() {
    this.cartItems = this.cartService.cartItemss;
    this.cartService.totalPrice.subscribe((price) => (this.totalPrice = price));
    this.cartService.totalQuantity.subscribe(
      (quantity) => (this.totalQuantity = quantity)
    );
    this.cartService.computeTotals();
  }
  incrementQuantity(data: CartItem) {
    this.cartService.addToCart(data);
  }

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
  }
}
