import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart/cart.service';
import { Cart } from '../../../shared/interfaces/cart';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  _CartService = inject(CartService);
  _ToastrService = inject(ToastrService);

  cartData : Cart ={} as Cart;
  cartItem : any;
 

  ngOnInit(): void {
    this._CartService.getLoggedUserCart().subscribe({
      next:(res)=>{
        this.cartData = res.data;
        this.cartItem = res;
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
        this._ToastrService.success('product count Updated');
      },
      error:(err)=>{
        this._ToastrService.error('Something Error');
      }
    })

  }
}
