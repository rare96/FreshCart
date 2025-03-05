import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { CartComponent } from './features/components/cart/cart.component';
import { ProductsComponent } from './features/components/products/products.component';
import { CategoriesComponent } from './features/components/categories/categories.component';
import { BrandsComponent } from './features/components/brands/brands.component';
import { LogInComponent } from './features/components/log-in/log-in.component';
import { RegisterComponent } from './features/components/register/register.component';
import { NotFoundComponent } from './features/components/not-found/not-found.component';
import { SingleProductComponent } from './features/components/single-product/single-product.component';
import { authGuard } from './core/guard/auth.guard';
import { CheckoutComponent } from './features/components/checkout/checkout.component';


export const routes: Routes = [
    {path:'',redirectTo:'/login', pathMatch:'full'},
    {path:'home', component:HomeComponent, title:'Home', canActivate:[authGuard]},
    {path:'cart', component:CartComponent, title:'Cart', canActivate:[authGuard]},
    {path:'checkout/:cartId', component:CheckoutComponent, title:'CheckOut', canActivate:[authGuard]},
    {path:'products', component:ProductsComponent, title:'Products', canActivate:[authGuard]},
    {path:'productDetails/:id', component:SingleProductComponent, title:'productDetails', canActivate:[authGuard]},
    {path:'categories', component:CategoriesComponent, title:'Categories', canActivate:[authGuard]},
    {path:'brands', component:BrandsComponent, title:'Brands', canActivate:[authGuard]},
    {path:'login', component:LogInComponent, title:'Login'},
    {path:'register', component:RegisterComponent, title:'Register'},
    {path:'**', component:NotFoundComponent, title:'Error 404'},
];
