import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { IProduct } from 'src/app/models/IProduct';
import { Subject } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderService } from 'src/app/service/order.service';
import { IOrder } from 'src/app/models/IOrder';

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
    private orderService: OrderService,
    ) { }
  
    //group() method is get a user info in Form.
    checkoutForm = this.formBuilder.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });

    //user input info.
    onSubmit(): void {
      console.warn('Thank you for your order!', this.checkoutForm.value);
      let order = <IOrder>this.checkoutForm.value;
      order.companyId = 4;
      //Post order data to Api.
      this.orderService.addOrder(this.checkoutForm.value);
      //save user info to local storage.
      var userInfo = JSON.stringify(this.checkoutForm.value);
      localStorage.setItem('userInfo', userInfo);
      //Empty cart items when user click 'comfirm button'.
      localStorage.removeItem('cart');
      

    //  id: number;
    // companyId: number;
    // created: string;
    // createdBy: string;
    // paymentMethod: string;
    // totalPrice: number;
    // status: number;
    // orderRows:
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

}
