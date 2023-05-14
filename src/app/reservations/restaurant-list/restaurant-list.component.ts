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
  _filtertext:string='';
  filteredRestaurants: Restaurant[];

  get filtertext()
  {
    return this._filtertext;
  }
  set filtertext(value:string)
  {
    this._filtertext=value;
    this.filteredRestaurants= this.filterRestaurantByName(value);
  }
  
  constructor(private reservationsService:ReservationsService,private restaurantService: RestaurantService)
  {
    
  }
  ngOnInit()
  {
       this.restaurants=this.reservationsService.getRestaurants();
       this.filteredRestaurants=this.restaurants;
  }
  onRestaurantSelected(event: { index: number, restaurant: Restaurant }) 
  {
    this.restaurantService.selectedRestaurant = event.restaurant;
  }
  
  filterRestaurantByName(filterTerm:string)
  {
    if(this.restaurants.length===0 || filterTerm==='')
    {
      return this.restaurants;
    }
    else
    {
      return this.restaurants.filter((resnt)=>{
        return resnt.name.toLowerCase().startsWith(filterTerm.toLowerCase());
      })
    }
  }
}
