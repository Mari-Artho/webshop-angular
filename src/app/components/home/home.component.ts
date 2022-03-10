import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';
import { IProduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];

  //categories
  categories:ICategory[] = [];
  categoryFilter:number = 0;

  //for search movie
  searchKey:string = "";
  public searchTerm !: string;
  
  constructor(private service: ProductService,) { }

  ngOnInit(): void {
      this.service.products$.subscribe((dataFromApi: IProduct[]) => {
      this.products = dataFromApi;
      this.service.categories$.subscribe((dataFromApi: ICategory[])=>{
      this.categories = dataFromApi;
      })
    });
    this.service.getProducts();
    this.service.getCategories();

    //for search movie
    this.service.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  
  //for search movie
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.service.search.next(this.searchTerm);
  }
}
