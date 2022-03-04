import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { IProduct } from 'src/app/models/IProduct';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public products : any = [];
  items = this.service.items;
  
  constructor (private service: CartService,) { }
    
  ngOnInit(): void {
  }

  //Remove Item from Cart.
  removeItem(i: any){
    this.service.removeCartItem(i);
  }

}

