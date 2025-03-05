import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../core/services/categories/category.service';
import { LoaderComponent } from "../loader/loader.component";
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../core/services/cart/cart.service';
import { SearchPipe } from "../../../core/pipes/search.pipe";
import { Products } from '../../../shared/interfaces/products';

@Component({
  selector: 'app-products',
  imports: [LoaderComponent, RouterLink, FormsModule, SearchPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  _CategoryService= inject(CategoryService);
  _AuthService= inject(AuthService);
  _CartService= inject(CartService);


  products: Products[] = [];

  searchTerm: string = '';


  ngOnInit() {
    this._CategoryService.getAllProducts().subscribe({
      next:(res)=>{
        this.products = res.data;
        
      },
      error:(errr)=>{
        console.log(errr);
      },
      complete:()=>{
        console.log('complete');
        
      }
    })


    
}

addToCart(id:any){
      this._CartService.addProductToCart(id).subscribe({
      next:(res)=>{
        console.log(res);

      },
      error:(errr)=>{
        console.log(errr);
      }
    })
  
}

}



