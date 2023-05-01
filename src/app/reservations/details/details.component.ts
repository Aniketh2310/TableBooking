import { Component ,Input,OnInit } from '@angular/core';
import { Restaurant } from '../restaurant.model';
import { ReservationsService } from '../reservations.service';
import { TableNumber } from 'src/app/tablenumber.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  implements OnInit {
  @Input() restaun:Restaurant;
  
   tableNumber ;

  constructor(private tableno:TableNumber)
  {

  }

  ngOnInit() 
  {
    this.tableNumber = this.tableno.getTableNumber(); // get the table number from shared service    
  }

}
