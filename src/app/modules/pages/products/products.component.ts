import { HttpCallApiService } from './../../http-call-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(private httpCallApiService: HttpCallApiService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  // ==== Function Products ======
  getAllProducts() {
    this.httpCallApiService.getProducts().subscribe((product: any) => {
      this.products = product;
      console.log(product);
    });
  }
}
