import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  //add data to 'url', post('url', body)
createContact(createResource:any){
  return this.http.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', createResource);
}


}
