import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
constructor(private api:ApiService){}
products:any=""
ngOnInit()
{
  this.api.getProducts().subscribe((data:any)=>{this.products=data})
}
}
