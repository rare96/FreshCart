import { Component, inject, NgModule } from '@angular/core';
import { CategoryService } from '../../../core/services/categories/category.service';
import { Products } from '../../../shared/interfaces/products';
import { LoaderComponent } from "../loader/loader.component";
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-products',
  imports: [LoaderComponent,RouterLink, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  _CategoryService= inject(CategoryService);
  _AuthService= inject(AuthService);
  _CartService= inject(CartService);


  products: Products[] = [];

  // searchTerm: string = '';
  // filteredProducts = this.products;
  

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

// onSearch(): void {
//   if (this.searchTerm) {
//     this.products = this.products.filter(product =>
//       product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
//       product.category.name.toLowerCase().includes(this.searchTerm.toLowerCase())
//     );
//   } else {
//     this.filteredProducts = this.products;
//   }
// }

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



