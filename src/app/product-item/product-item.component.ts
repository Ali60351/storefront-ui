import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity: string = '1';

  constructor(private cartService: CartService) {
    this.product = {
      id: -1,
      name: '',
      description: '',
      url: '',
      price: 0
    }
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.cartService.add(this.product, Number(this.quantity));
  }
}
