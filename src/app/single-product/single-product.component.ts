import { Component, OnInit } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  productItem: Product = new Product();
  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.handleDetail();
  }
  handleDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.productService.getProducts().forEach((data) => {
      if (data.id === id) this.productItem = data;
    });
  }

  addToCart(product: Product) {
    console.log(`Adding to cart ${product.name},${product.price}`);
    const theCartItem = new CartItem(product);
    this.cartService.addToCart(product);
  }
}
