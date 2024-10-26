import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SingleComponent } from './pages/single/single.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
    {path:'products/id',component:SingleComponent}
];
