import { Component } from '@angular/core';
import { LoaderComponent } from "../loader/loader.component";
import { ProductsComponent } from "../products/products.component";
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'app-home',
  imports: [ProductsComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
