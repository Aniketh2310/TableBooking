import { Component ,Input,OnInit } from '@angular/core';
import { Restaurant } from '../restaurant.model';
import { ReservationsService } from '../reservations.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {
  @Input() restaun:Restaurant;

  // selectedTables: string;
   tableNumber = '';

  // constructor(private reservationsService:ReservationsService)
  // {

  // }

  // onTableSelected(tableId: string): void 
  // {
  //   this.selectedTables = tableId;
  // }
  // ngOnInit(): void {
  //   this.tableNumber = this.reservationsService.getTableNumber(); // get the table number from shared service
  // }

}
