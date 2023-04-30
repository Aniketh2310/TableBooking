import { Component, OnInit } from '@angular/core';
import { ReservationsService } from './reservations.service';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
  providers:[ReservationsService]
})
export class ReservationsComponent implements OnInit{
  selectedRestaurant:Restaurant;

  constructor(private reservationsService:ReservationsService){}
  filteredStatus='';
  
  ngOnInit(){
      this.reservationsService.restaurantSelected
      .subscribe(
        (restaurant:Restaurant)=>{
          this.selectedRestaurant=restaurant;
        }
      )
  }
}
