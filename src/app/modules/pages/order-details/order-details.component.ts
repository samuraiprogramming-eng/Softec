import { HttpCallApiService } from './../../http-call-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  users: any;
  Date: any;

  constructor(private httpCallApiService: HttpCallApiService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  // ==== Function AllUsers // Order Details  ======
  getAllUsers() {
    this.httpCallApiService.getusers().subscribe((user: any) => {
      this.users = user;
    });
  }
}
