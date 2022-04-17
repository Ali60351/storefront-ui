import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor() {
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

}
