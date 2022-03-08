import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOrder } from '../models/IOrder';
import { HttpHeaders } from '@angular/common/http';

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
  userInfo!: IOrder[];
  orderInfo!: IOrder[];

  constructor(private http:HttpClient) { }

//POST: add a new order to the database
addOrder(order: IOrder) {
  return this.http.post<IOrder>(environment.orderApi,
    order, httpOptions).subscribe((result) => {
      console.warn(result)
    });
}

//get orders data
getOrders():void{
  this.http
  .get<IOrder[]>(environment.orderApi + '?companyId=0004')
  .subscribe((dataFromApi:IOrder[])=>{
  this.orderInfo = dataFromApi;
  this.orders.next(dataFromApi);
  });
} 

}
