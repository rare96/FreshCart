import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  mytoken = localStorage.getItem('myToken')!;

  addProductToCart(pId:any):Observable<any>{
   return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,{"productId" : pId}, {
    headers : {
      token : this.mytoken
    }
   })
  }

  getLoggedUserCart():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        headers: {
          token : this.mytoken
        }
      }
    )
  }


  removeSpecificCartItem(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        headers:{
          token:this.mytoken
        }
      }
    )
  }

  updateProductQuantity(id:string, newCount:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        "count": newCount
    },
    {
      headers:{
        token:this.mytoken
      }
    }
    )
  }

}



