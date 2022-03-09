import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/IOrder';
//import { ProductService } from 'src/app/service/product.service';
import { OrderService } from 'src/app/service/order.service';
import { IOrderRow } from 'src/app/models/IOrderRow';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  //products: IOrderRow[] = [];
  orders: IOrder[] = [];

  constructor( 
    //private productService: ProductService,
    private orderService: OrderService) { }

  ngOnInit(): void {
    // //get a product data
    // this.productService.products$.subscribe(productsData=>{
    //   this.products = productsData;
    // });
    // this.productService.getProducts();

   //get a order data
   this.orderService.orders$.subscribe(orderData=>{
     this.orders = orderData;
   });
   this.orderService.getOrders();
  }

  cancelOrder(id:number){
    console.log('order was cenceled');
    this.orderService.removeOrder(id);
  }

}
