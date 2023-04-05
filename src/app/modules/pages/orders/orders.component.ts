import { Component, OnInit } from '@angular/core';
import { HttpCallApiService } from '../../http-call-api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: any;
  date: any;
  constructor(private httpCallApiService: HttpCallApiService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  // ==== Function AllOrders ======
  getAllOrders() {
    this.httpCallApiService.getOrders().subscribe((res: any) => {
      this.orders = res;
      console.log(res);
    });
  }
}
