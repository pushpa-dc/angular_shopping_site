import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemss: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() {}

  addToCart(cartItems: CartItem) {
    let alreadyExistInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if (this.cartItemss.length > 0) {
      existingCartItem = this.cartItemss.find(
        (cartItem) => cartItem.id === cartItems.id
      );
      alreadyExistInCart = existingCartItem != undefined;
    }
    if (alreadyExistInCart) {
      existingCartItem.quantity++;
    } else {
      this.cartItemss.push(cartItems);
    }

    this.computeTotals();
  }

  computeTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItemss) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.price;
      totalQuantityValue += currentCartItem.quantity;
    }

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }

  decrementQuantity(theCartItem: CartItem) {
    theCartItem.quantity--;
    if (theCartItem.quantity === 0) {
      this.remove(theCartItem);
    } else {
      this.computeTotals();
    }
  }

  remove(theCartItem: CartItem) {
    // get index of item in the array
    const itemIndex = this.cartItemss.findIndex(
      (tempCartItem) => tempCartItem.id === theCartItem.id
    );
    console.log(itemIndex);
    // if found, remove the item from the array at the given index
    if (itemIndex > -1) {
      this.cartItemss.splice(itemIndex, 1);

      this.computeTotals();
    }
    console.log(theCartItem);
  console.log(this.cartItemss)
  }

}
