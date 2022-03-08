import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOrder } from '../models/IOrder';

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
addOrder(addOrder: IOrder): Observable<IOrder> {
  return this.http.post<IOrder>(environment.orderApi, addOrder);
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
