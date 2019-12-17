import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private products: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.findAll();
  }


}
