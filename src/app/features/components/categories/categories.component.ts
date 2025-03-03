import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/categories/category.service';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-categories',
  imports: [LoaderComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];

  _CategoryService= inject(CategoryService)
  
  ngOnInit(): void {
    this._CategoryService.getCategories().subscribe({
      next:(res)=>{
        this.categories = res.data;
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
