import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService 
{
  selectedRestaurant: Restaurant;
  
  constructor() { }
}
