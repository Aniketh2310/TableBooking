import { Component,Input,Output, EventEmitter,OnInit} from '@angular/core';
import { Restaurant } from '../../restaurant.model';
import { ReservationsService } from '../../reservations.service';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit{
  @Input() restau:Restaurant;
  @Input() restaurant: Restaurant;
  @Input() id:number;
  @Output() restaurantSelected = new EventEmitter<{ index: number, restaurant: Restaurant }>();


  constructor(private reservationsService: ReservationsService) { }

  onSelect(index: number, restaurant: Restaurant) 
  {
    this.restaurantSelected.emit({ index: index, restaurant: restaurant });
    console.log("Restaurant Selected");
    
  }

  

  ngOnInit() {
      
  }
  
}
