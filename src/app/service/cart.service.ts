import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProduct[] = [];
  public cartItemList : any =[];
  //BehaviorSubject holds the value that has flowed
  public productList = new BehaviorSubject<any>([]);

  constructor() { 
    //Get a data from JSON.
    let itemsJSON = localStorage.getItem("cart") || '[]';
    this.items = JSON.parse(itemsJSON);
  }

  //Add Item to Cart
  add(item:IProduct) {
    //User can't select/add the same movie twice.
    if (this.items.includes(item))
      return;
    this.items.push(item);
    this.updateLocalStorage();
  }

  //Remove Item from Shopping Cart
  removeCartItem(i:any){
    this.items.splice(i,1);
    this.updateLocalStorage();
    }

  //Update local storage
  updateLocalStorage(){
    localStorage.setItem('cart',JSON.stringify(this.items));
  }

  //Clear cart
  clearCart() {
    this.items = [];
    this.updateLocalStorage();
    return this.items;
  }

}

