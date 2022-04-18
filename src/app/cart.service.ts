import { Injectable } from '@angular/core';
import { CartItem } from './models/cart-item';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<CartItem> = [];

  constructor() {
    const localCart = localStorage.getItem('cart');

    if (localCart) {
      this.cart = JSON.parse(localCart);
    }
  }

  fetch(): Array<CartItem> {
    return this.cart;
  }

  private sync(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  add(product: Product, quantity: number): void {
    if (this.cart.some(item => item.product.id === product.id)) {
      this.update(product, quantity);
      return;
    }

    this.cart.push({ product, quantity });
    this.sync();

    alert(`${product.name} successfully added to cart`);
  }

  update(product: Product, quantity: number): void {
    this.cart = [
      ...this.cart.filter(cartItem => cartItem.product.id !== product.id),
      { product, quantity }
    ];

    this.sync();
    alert(`${product.name} entry successfully cart`);
  }
}
