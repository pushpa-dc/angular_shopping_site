import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CartItem } from '../model/cart-item';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products;
  gridStyle = {
    width: '100%',
    textAlign: 'left',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

  addToCart(product: Product) {
    console.log(`Adding to cart ${product.name},${product.price}`);
    const theCartItem = new CartItem(product);
    this.cartService.addToCart(product);
  }
}
