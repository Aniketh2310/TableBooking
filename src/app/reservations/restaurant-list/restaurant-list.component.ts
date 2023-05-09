import { Component,  OnInit} from '@angular/core';
import { Restaurant } from '../restaurant.model';
import { ReservationsService } from '../reservations.service';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit
{
  
  restaurants:Restaurant[];
  selectedRestaurant: Restaurant;

  
  constructor(private reservationsService:ReservationsService,private restaurantService: RestaurantService)
  {
    
  }
  ngOnInit()
  {
       this.restaurants=this.reservationsService.getRestaurants();
  }
  onRestaurantSelected(event: { index: number, restaurant: Restaurant }) 
  {
    this.restaurantService.selectedRestaurant = event.restaurant;
  }
  
}
