import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { IProduct } from 'src/app/models/IProduct';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public products : any = [];
  items = this.service.items;
  //for total price
  //Subject class can be reactivated at any time, such as when the user clicks
  cartItems: IProduct[] = [];
  price: Subject<number> = new Subject<number>();
  
  constructor (private service: CartService) { }
    
  ngOnInit(): void {
  }

  //Remove Item from Cart.
  removeItem(i: any){
    this.service.removeCartItem(i);
  }

  //Calculate total price
  totalPrice(){
    let totalPrice: number =0;

    for (let item of this.items){
      totalPrice += item.price ;
    }
    return totalPrice + " SEK";
  }
  
}
