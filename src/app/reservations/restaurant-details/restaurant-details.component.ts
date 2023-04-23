import { Component, Input } from '@angular/core';
import { Restaurant } from '../restaurant.model';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent {
  @Input() restauran:Restaurant;
}
