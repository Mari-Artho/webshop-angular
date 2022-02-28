import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  movieId:string = '';

  constructor(private route: ActivatedRoute) { }

  //There was a problem with 'null', so I added ' || "" '.
  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id') || "";
}

}


