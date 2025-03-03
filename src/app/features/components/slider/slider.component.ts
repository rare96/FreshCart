import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../core/services/categories/category.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-slider',
  imports: [CarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 7
      }
    },
    nav: true
  }
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
