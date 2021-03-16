import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CartItem } from '../model/cart-item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  disabled = false;
  checked = true;
  check = [
    { name: 'Lifestyle', checked: true },
    { name: 'Running', checked: false },
    { name: 'Training', checked: false },
  ];

  size = [1, 2, 3, 4, 5, 6, 7, 8, 10, 23, 45, 55, 77, 88, 89];
  value2 = [20, 50];
  list: string[] = [
    'orange',
    'blue',
    'yellow',
    'crimson',
    '#ffccbb',
    '#227733',
    'cyan',
    '#77bb33',
  ];


  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    return this.check.forEach((check) => check);
  }


}
