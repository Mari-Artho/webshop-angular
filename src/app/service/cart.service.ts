import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProduct[] = [];

  constructor() { 
    //Get a data from JSON.
    let itemsJSON = localStorage.getItem("cart") || '[]';
    this.items = JSON.parse(itemsJSON);
  }

  //Save Cart Items.
  private save() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  //Add Cart
  add(item:IProduct) {
    //User can't select/add the same movie twice.
    console.log(item);
    if (this.items.includes(item))
      return;
    this.items.push(item);
    this.save();
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

  //Clear Cart
  clearCart() {
    this.items = [];
    this.save();
  }


}
