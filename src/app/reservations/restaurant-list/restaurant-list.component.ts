import { Component,  OnInit} from '@angular/core';
import { Restaurant } from '../restaurant.model';
import { ReservationsService } from '../reservations.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{
  
  restaurants:Restaurant[]=[];
  
  constructor(private reservationsService:ReservationsService)
  {

  }
  ngOnInit(){
      this.restaurants=this.reservationsService.getRestaurants();
  }
  
}
