import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Array<CartItem> = [];

  fullName: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.fetch();

    if (!this.cart.length) {
      alert('No items present in cart');
      this.router.navigate(['/']);
    }
  }

  getTotal(): string {
    return this.cart.map(item => item.product.price * item.quantity).reduce((a, b) => a + b).toFixed(2);
  }

  handleQuantityUpdate(quantity: number, product: Product) {
    this.cartService.update(product, quantity);
    this.cart = this.cartService.fetch()
  }

  handleRemove(product: Product) {
    this.cartService.delete(product);
    this.cart = this.cartService.fetch()

    if (!this.cart.length) {
      this.router.navigate(['/']);
    }
  }

  handleSubmit() {
    this.router.navigate(
      ['/success', { name: this.fullName, total: this.getTotal() }]
    )
  }
}
