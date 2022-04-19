import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;

  @Output() quantityUpdate = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() {
    this.item = new CartItem();
  }

  ngOnInit(): void {
  }
}
