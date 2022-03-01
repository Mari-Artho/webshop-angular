import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.products$.subscribe((dataFromApi: IProduct[]) => {
      this.products = dataFromApi;
    });

    this.service.getProducts();
  }

}
