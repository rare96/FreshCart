import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../../core/services/cart/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

  _CartService = inject(CartService);
  _ActivatedRoute = inject(ActivatedRoute);

  cartId !: string;

  addressForm = new FormGroup({
    details : new FormControl(null,[ Validators.required]),
    phone : new FormControl(null,[ Validators.required]),
    city : new FormControl(null,[ Validators.required]),
  });


  onLinePayment(formData:any){
    let id = this._ActivatedRoute.snapshot.params?.['cartId'];
    if(formData.valid){
      this._CartService.checkOutSession(id, formData.value).subscribe({
        next:(res)=>{
          console.log(res);
          location.href = res.session.url;
        },
        error:(err)=>{
          console.log(err);
          
        },
      })
    }
  }

}
