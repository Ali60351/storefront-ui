import { Injectable } from '@angular/core';
import { CartItem } from './models/cart-item';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<CartItem> = [];

  constructor() { }

  fetch(): Array<CartItem> {
    return this.cart;
  }

  add(product: Product, quantity: number): void {
    this.cart.push({ product, quantity });
    alert(`${product.name} successfully added to cart`);
  }

  update(product: Product, quantity: number): void {
    this.cart = [
      ...this.cart.filter(cartItem => cartItem.product.id !== product.id),
      { product, quantity }
    ]
  }
}
