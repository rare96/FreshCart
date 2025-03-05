import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  

  addProductToCart(pId:any):Observable<any>{
   return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,{"productId" : pId})
  }

  getLoggedUserCart():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,)
  }


  removeSpecificCartItem(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,)
  }

  updateProductQuantity(id:string, newCount:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        "count": newCount
    }
    )
  }



  checkOutSession(cartId:any, addressData: any ):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`
    ,{
      "shippingAddress": addressData
  },);
  }
}



