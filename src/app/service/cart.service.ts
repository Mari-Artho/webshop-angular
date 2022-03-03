import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: number[] = [];

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
  add(id:number) {
    if (this.items.includes(id))
      return;
    this.items.push(id);
    this.save();
  }

  //Remove Cart
  remove(id:number){
    for (let i = 0; i<this.items.length; i++){
      if( this.items[i] == id) {
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
