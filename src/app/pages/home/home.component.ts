import { Component } from '@angular/core';
import { CarouselComponent } from '../../units/carousel/carousel.component';
import { AccordionComponent } from '../../units/accordion/accordion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,AccordionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
