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
      let order: IOrder = {
        companyId: 4,
        createdBy: "Mamazon",
        totalPrice: this.totalPrice(),
        paymentMethod: "CC",
        status: 0,
        orderRows: []
      };
      //Post order data to Api.
      this.orderService.addOrder(order);
      console.warn('Thank you for your order!', order);
      //save user info to local storage.
      var userInfo = JSON.stringify(order);
      localStorage.setItem('order', userInfo);
      //Empty cart items when user click 'comfirm button'.
      localStorage.removeItem('cart');
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
