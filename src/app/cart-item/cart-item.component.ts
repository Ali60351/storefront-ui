import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit, OnChanges {
  @Input() item: CartItem;

  @Output() quantityUpdate = new EventEmitter();
  @Output() remove = new EventEmitter();

  quantity: number;

  constructor() {
    this.item = new CartItem();
    this.quantity = 0;
  }

  ngOnInit(): void {
    this.quantity = this.item.quantity;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      this.quantity = changes['item'].currentValue.quantity;
    }
  }

  handleUpdate(event: Event) {
    this.quantityUpdate.emit(event);
  }
}
