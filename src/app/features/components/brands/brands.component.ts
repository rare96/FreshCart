import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../core/services/categories/category.service';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-brands',
  imports: [LoaderComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {

  _CategoryService= inject(CategoryService)
  brands: any[] = [];
  ngOnInit(): void {
    this._CategoryService.getBrands().subscribe({
      next:(res)=>{
        this.brands = res.data;
      },
      error:(errr)=>{
        console.log(errr);
      },
      complete:()=>{
        console.log('complete');
        
      }
    })
  }
}
