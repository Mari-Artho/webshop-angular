import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOrder } from '../models/IOrder';
import { HttpHeaders } from '@angular/common/http';
import { IUser } from '../models/IUser';
import { EventEmitter } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders = new Subject<IOrder[]>();
  orders$ = this.orders.asObservable();
  orderInfo!: IOrder[];
  //I changed my company ID 4 => 444.
  companyId = 444;

  constructor(private http:HttpClient) { }

//POST: add a new order to the database
addOrder(order: IOrder) {
  return this.http.post<IOrder>(environment.orderApi,
    order, httpOptions).subscribe((result) => {
      console.warn(result);
    });
}

addUser(user:IUser){
  return this.http.post<IUser>(environment.orderApi, user, httpOptions)
  .subscribe((result)=>{
    console.warn(result);
  })
}

//Get orders data
getOrders():void{
  this.http
  .get<IOrder[]>(environment.orderApi + '?companyId=' + this.companyId)
  .subscribe((dataFromApi:IOrder[])=>{
  //this.orderInfo = dataFromApi;
  this.orders.next(dataFromApi);
  });
} 

//Cancel order
removeOrder(id:number){
  this.http.delete(environment.orderApi + "/" + id + '?companyId=' + this.companyId )
  .subscribe(()=>this.getOrders());
}

}
