import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  //For search movie.
  transform(value: IProduct[], filterString: string): IProduct[] {
    const result:IProduct[] = [];
    if ( !value || filterString===''){
      return value;
    }
    value.forEach((a:IProduct)=>{
      if(a["name"].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
