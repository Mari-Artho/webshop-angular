import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { IProduct } from 'src/app/models/IProduct';
import { Subject } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderService } from 'src/app/service/order.service';
import { IOrder } from 'src/app/models/IOrder';
import { IOrderRow } from 'src/app/models/IOrderRow';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
  public products: any = [];
  items = this.cartService.items;

  //For total price
  //Subject class can be reactivated at any time, such as when the user clicks
  cartItems: IProduct[] = [];
  price:Subject<number> = new Subject<number>();

  constructor (
    private cartService: CartService,
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

    //Action when the user presses the order button
    onSubmit(): void {
      //Add user input info
      let user:IUser;
      user = this.checkoutForm.value;
      //Post user data to Api
      this.orderService.addUser(user);
      let userData = user.firstName + " " + user.lastName + " , email: " +
      user.email ;
      console.log(userData);

      let orderRows = [];
      for (let item of this.items) {
        let row: IOrderRow = {
          productId: parseInt(item.id),
          amount: 1 // amount = 1 for virtual product
        }
        orderRows.push(row);
      }
      let order: IOrder = {
        // previous student used my companyId '4', so I choose '444'.
        id: 0,
        companyId: 444,
        createdBy: userData,
        totalPrice: this.totalPrice(),
        paymentMethod: "CC",
        status: 0,
        orderRows: orderRows,
      };
      //Post order data to Api
      this.orderService.addOrder(order);

      //save user info to local storage.
      var userInfo = JSON.stringify(order);
      localStorage.setItem('order', userInfo);
      //Empty cart items when user click 'confirm button'.
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
