import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/IOrder';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  orders: IOrder[] = [];

  constructor(
private orderService: OrderService) { }

  ngOnInit(): void {
   //get a order data
   this.orderService.orders$.subscribe(orderData=>{
     this.orders = orderData;
   });
   this.orderService.getOrders();
  }

  cancelOrder(id:number){
    this.orderService.removeOrder(id);
  }

}
