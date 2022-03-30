import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { BehaviorSubject } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProduct[] = [];
  public cartItemList : any =[];
  //BehaviorSubject holds the value that has flowed
  public productList = new BehaviorSubject<any>([]);

  countItem = new EventEmitter<number>();

  constructor() { 
    //Get a data from JSON.
    let itemsJSON = localStorage.getItem("cart") || '[]';
    this.items = JSON.parse(itemsJSON);
    this.countItem.emit(this.items.length);
  }

  //Add Item to Cart
  add(item:IProduct) {
    //User can't select/add the same movie twice.
    let id = item.id;
    if (this.items.find(prod => prod.id == id))
      return;
    this.items.push(item);
    this.updateCart();
  }

  //Remove Item from Shopping Cart
  removeCartItem(i:any){
    this.items.splice(i,1);
    this.updateCart();
    }

  //Update local storage
  updateCart(){
    localStorage.setItem('cart',JSON.stringify(this.items));
    this.countItem.emit(this.items.length);
  }

  //Clear cart
  clearCart() {
    this.items = [];
    this.updateCart();
    return this.items;
  }

  //showItem
  countOrder(){
    return this.countItem;
  }

}

