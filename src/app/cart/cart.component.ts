import { Component, OnInit } from '@angular/core';
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

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.fetch()
  }

  getTotal(): string {
    return this.cart.map(item => item.product.price).reduce((a, b) => a + b).toFixed(2);
  }

  handleQuantityUpdate(event: Event, product: Product) {
    const target = event.target as HTMLInputElement;
    this.cartService.update(product, Number(target.value));
  }

  handleRemove(product: Product) {
    this.cartService.delete(product);
    this.cart = this.cartService.fetch()
  }

  handleSubmit() {

  }
}
