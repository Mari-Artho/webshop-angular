import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProducts } from '../models/IProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = new Subject<IProducts[]>();
  products$ = this.products.asObservable();

  constructor(private http: HttpClient) { }

  //Get froj API.
  //apiUrl is in enviroment.ts, it's much easier to change it.
  getProducts(){
    this.http
    .get<IProducts[]>(environment.apiUrl)
    .subscribe((dataFromApi:IProducts[])=>{
      console.log(dataFromApi);
      this.products.next(dataFromApi);
    })
  }

}