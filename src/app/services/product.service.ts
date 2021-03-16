import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
    {
      id: 1,
      name: 'New Arrival Shoes',
      dimension2: 'Promotion',
      img: '/assets/img/1.jpg',
      price: 1200,
      quantity: 1
    },
    {
      id: 2,
      name: 'New Arrival Shoes',
      dimension2: 'Promotion',
      img: '/assets/img/2.jpg',
      price: 1500,
      quantity: 1
    },
    {
      id: 3,
      name: 'New Arrival Shoes',
      dimension2: 'Promotion',
      img: '/assets/img/3.jpg',
      price: 1800,
      quantity: 1
    },
    {
      id: 4,
      name: 'New Arrival Shoes',
      dimension2: 'Promotion',
      img: '/assets/img/4.jpg',
      price: 2200,
      quantity: 1
    },
    {
      id: 5,
      name: 'New Arrival Shoes',
      dimension2: 'Promotion',
      img: '/assets/img/5.jpg',
      price: 1900,
      quantity: 1
    },
    {
      id: 6,
      name: 'New Arrival Shoes',
      dimension2: 'Promotion',
      img: '/assets/img/6.jpg',
      price: 3200,
      quantity: 1
    },
    {
      id: 7,
      name: 'New Arrival Shoes',
      dimension2: 'Promotion',
      img: '/assets/img/7.jpg',
      price: 3400,
      quantity: 1
    },

    {
      id: 8,
      name: 'New Arrival Shoes',
      dimension2: 'Promotion',
      img: '/assets/img/8.jpg',
      price: 3600,
      quantity: 1
    },
    {
      id: 9,
      name: 'New Arrival Shoes',
      dimension2: 'Promotion',
      img: '/assets/img/9.jpg',
      price: 4200,
      quantity: 1
    },
  ];
  constructor() {
  }

  getProducts() {
    return this.products;
  }

  // getProduct(id) {
  //   this.products.map((data) => {
  //     if (data.id === id){
  //       return data
  //       // console.log(data)
  //     };
  //   });
  // }
}
