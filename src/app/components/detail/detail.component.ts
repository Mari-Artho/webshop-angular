import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IProduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/service/product.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  movieId:string = '';
  products: IProduct[] = [];

  constructor(
    private route: ActivatedRoute, 
    private location: Location, 
    private service: ProductService,
    private serviceCart: CartService,
    ) { }

  //There was a problem with 'null', so I added ' || "" '.
  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id') || "";
    
    this.service.products$.subscribe((dataFromApi:IProduct[] )=>{
      this.products = dataFromApi;
    
    });
    this.service.getProducts();
  } 

  //Back to previous page.
  backBtn(){
    this.location.back();
  }

  //Add cart button => save to local storage.
  saveProduct(){
    console.log("User clicked add cart button.");
    //this.cart.serviceとか入れてconstructorにもservice:Cartserviceとかblabla書く
    var movieId = JSON.stringify(this.movieId);

    this.serviceCart.add(movieId);
  }
}


