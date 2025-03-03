import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../core/services/categories/category.service';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../../shared/interfaces/products';

@Component({
  selector: 'app-single-product',
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {
_CategoryService= inject(CategoryService);
_ActivatedRoute = inject(ActivatedRoute);

productDetails !: Products;

ngOnInit(): void {
  
  let productId = this._ActivatedRoute.snapshot.params?.['id'];
  this._CategoryService.getSpecificProduct(productId).subscribe({
    next:(res)=>{
      this.productDetails = res.data;
    },
    error:()=>{},
    
  })
  
}




}
