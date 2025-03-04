import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart/cart.service';
import { Cart } from '../../../shared/interfaces/cart';
import { log } from 'console';
import { LoaderComponent } from "../loader/loader.component";


@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  _CartService = inject(CartService);

  cartData : Cart ={} as Cart;
  cartItem : any;
 

  ngOnInit(): void {
    this._CartService.getLoggedUserCart().subscribe({
      next:(res)=>{
        this.cartData = res.data;
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  };

  

  removeItem(id:string):void{
    this._CartService.removeSpecificCartItem(id).subscribe({
      next:(res)=>{
        
        this.cartItem = res;
        this.cartData = res.data;
      },
      error:(err)=>{

      }
    })
  }


  updateCount(id:string, count:number):void{
    this._CartService.updateProductQuantity(id,count).subscribe({
      next:(res)=>{
        console.log(res);
        
        this.cartData = res.data;
      },
      error:(err)=>{

      }
    })

  }
}
