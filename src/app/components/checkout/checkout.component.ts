import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { IProduct } from 'src/app/models/IProduct';
import { Subject } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public products: any = [];
  items = this.service.items;

  //for total price
  //Subject class can be reactivated at any time, such as when the user clicks
  cartItems: IProduct[] = [];
  price: Subject<number> = new Subject<number>();

  constructor (
    private service: CartService,
    private formBuilder: FormBuilder,
    ) { }
  
    //group() method is get a user info in Form.
    checkoutForm = this.formBuilder.group({
      id: '',
      companyId: '',
      created: '',
      paymentMethod: '',
      totalPrice: 0,
      status: 0,
      orderRows: [],
      firstName:'',
      lastName: '',
      address: '',
      email: '',
      phone: '',
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
    let totalPrice:number = 0;
    for (let item of this.items){
      totalPrice += item.price ;
    }
    return totalPrice ;
  }

  //Order comfirm button
  addNewContact(){
    console.log("Thank you for your purchase!!");
    const newFormData = {id:'Anna', companyId: 4 };

  }

}
