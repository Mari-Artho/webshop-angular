import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, subscribeOn } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/IProduct';
import { BehaviorSubject } from 'rxjs';
import { ICategory } from '../models/ICategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = new Subject<IProduct[]>();
  products$ = this.products.asObservable();
  productInfo!: IProduct[];

  //For categories
  private categories = new Subject<ICategory[]>();
  categories$ = this.categories.asObservable();

  //For search movie
  public search = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  //Data from API.
  //apiUrl is in enviroment.ts, it's much easier to change it.
  getProducts(): void {
    this.http
    .get<IProduct[]>(environment.productApi)
    .subscribe((dataFromApi:IProduct[])=>{
      this.productInfo = dataFromApi;
      this.products.next(dataFromApi);
    })
  }

  //Categories
  getCategories(){
    this.http.get<ICategory[]>(environment.categoryApi).subscribe((dataFromApi)=>{
      this.categories.next(dataFromApi);
    })
  }

}
