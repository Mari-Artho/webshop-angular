import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Pipe({
  name: 'selectById'
})

//The two IDs(products.is & movieId) are compared and the one that matches the ID of the movie selected by the user is selected.
export class SelectByIdPipe implements PipeTransform {
  transform(products: IProduct[], movieId: string): any {
    if (!products || !movieId) {
      return products;
    }
    return products.filter(product => product.id == movieId);
  }
}
