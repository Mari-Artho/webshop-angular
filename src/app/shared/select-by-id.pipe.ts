import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { ProductService } from '../service/product.service';
import { DetailComponent } from '../components/detail/detail.component';

@Pipe({
  name: 'selectById'
})

//The two IDs(products.is & movieId) are compared and the one that matches the ID of the movie selected by the user is selected.
export class SelectByIdPipe implements PipeTransform {
  transform(products: IProduct[], movieId: string): any {
    if (!products || !movieId) {
      return products;
    }
    return products.filter(products => products.id == movieId);
  }
}
