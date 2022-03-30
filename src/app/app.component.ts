import { Component } from '@angular/core';
import { CartService } from './service/cart.service';
import { OrderService } from './service/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countItem:number = 0;

  constructor ( private cart: CartService){};

  ngOnInit(){
    this.cart.countOrder().subscribe((item)=>{
      this.countItem = item;
    });
  }
  
}
