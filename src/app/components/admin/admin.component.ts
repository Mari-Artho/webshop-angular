import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/IOrder';
import { IProduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/service/product.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  products: IProduct[] = [];
  orders: IOrder[] = [];


  constructor( 
    private productService: ProductService,
    private orderService: OrderService) { }

  ngOnInit(): void {
    //get a product data
    this.productService.products$.subscribe(productsData=>{
      this.products = productsData;
    });
    this.productService.getProducts();

   //get a order data
   this.orderService.orders$.subscribe(orderData=>{
     this.orders = orderData;
   });
   this.orderService.getOrders();
  }

}
