import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/ICategories';
import { IProduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];
  //category
  public filterCategory:any;

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
      // this.filterCategory = dataFromApi;
      // this.products.forEach((a:any)=>{
      //   if(a.category==="Action"){
      //     a.category='Action'
      //   }
      // })
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

  //for categories


  // // //for categories
  // filter(category:string){
  //   this.filterCategory == this.products
  //   .filter(a:any) => {
  //     if(arguments.category == category || category==''){
  //       return arguments;
  //     }
  //   }
  // }


}
