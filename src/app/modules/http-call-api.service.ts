import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpCallApiService {
  orders: string = 'assets/data/orders.json';
  products: string = 'assets/data/products.json';
  users: string = 'assets/data/users.json';
  constructor(private http: HttpClient) {}
  getOrders() {
    return this.http.get(this.orders);
  }
  getProducts() {
    return this.http.get(this.products);
  }
  getusers() {
    return this.http.get(this.users);
  }
}
