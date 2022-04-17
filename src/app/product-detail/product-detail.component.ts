import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.product = {
      id: -1,
      name: '',
      description: '',
      url: '',
      price: 0
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productService.getProducts().subscribe(data => {
        const requiredProduct = data.find(product => product.id === Number(params['id']))

        if (requiredProduct) {
          this.product = requiredProduct;
        } else {
          alert('Product not found');
        }
      })
    })
  }

}
