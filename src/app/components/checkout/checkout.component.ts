import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { IProduct } from 'src/app/models/IProduct';
import { Subject } from 'rxjs';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public products : any = [];
  items = this.service.items;
  //for total price
  //Subject class can be reactivated at any time, such as when the user clicks
  cartItems: IProduct[] = [];
  price: Subject<number> = new Subject<number>();

  constructor (
    private service: CartService,
    private formBuilder: FormBuilder,
    ) { }
  
    //group() method is get a user info.
    checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

    //user input info.
    onSubmit(): void {
      // Process checkout data here
      this.items = this.service.clearCart();
      console.warn('Thank you for your order!', this.checkoutForm.value);
      this.checkoutForm.reset();
    }
    
  ngOnInit(): void {
  }

  //Calculate total price
  totalPrice(){
    let totalPrice: number =0;

    for (let item of this.items){
      totalPrice += item.price ;
    }
    return totalPrice ;
  }

}
