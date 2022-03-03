import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items = this.service.items;
  
  constructor (private service: CartService,) { }
    
  ngOnInit(): void {
  }

  //Remove Cart
  remove(item:IProduct){
    for (let i = 0; i<this.items.length; i++){
      if( this.items[i] == item) {
        this.items.splice(i ,1);
        break;
      }
    }
    this.save();
  }

  //Save Cart Items.
  private save() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

}
