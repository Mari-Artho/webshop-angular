import { Component, EventEmitter } from '@angular/core';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countItem:any = 0;

  constructor ( private cart: CartService){
  };

  ngOnInit():any{
    this.cart.countOrder().subscribe((item)=>{
      this.countItem = item;
    });
  }
  
  
}
