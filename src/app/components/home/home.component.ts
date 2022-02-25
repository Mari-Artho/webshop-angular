import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/models/IProducts';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: IProducts[] = [];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.products$.subscribe((dataFromApi: IProducts[]) => {
      this.products = dataFromApi;
    });

    this.service.getProducts();
  }

}
