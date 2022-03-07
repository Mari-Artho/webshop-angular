import { Component, OnInit } from '@angular/core';
import { IOrders } from 'src/app/models/IOrders';
import { IProduct } from 'src/app/models/IProduct';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  orders: IOrders[] = [];

  constructor(private service: OrderService) { }

  ngOnInit(): void {
  
  }

}
