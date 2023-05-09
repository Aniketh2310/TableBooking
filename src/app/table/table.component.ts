import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../reservations/restaurant.model';
import { ReservationsService } from '../reservations/reservations.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent 
{
  selectedRestaurant:Restaurant;
  constructor(private reservationsService:ReservationsService){}
  
  
  ngOnInit(){
      this.reservationsService.restaurantSelected
      .subscribe(
        (restaurant:Restaurant)=>{
          this.selectedRestaurant=restaurant;
        }
      )
  }
}
