import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IOrders } from '../models/IOrders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders = new Subject<IOrders[]>();
  orders$ = this.orders.asObservable();
  userInfo!: IOrders[];
  orderInfo!: IOrders[];

  constructor(private http:HttpClient) { }

//POST: add a new order to the database
addOrder(addOrder: IOrders): Observable<IOrders> {
  return this.http.post<IOrders>(environment.orderApi, addOrder);
}

//get orders data
getOrders():void{
  this.http
  .get<IOrders[]>(environment.orderApi + 'orders?companyId=0004')
  .subscribe((dataFromApi:IOrders[])=>{
  this.orderInfo = dataFromApi;
  this.orders.next(dataFromApi);
  });
} 

}
