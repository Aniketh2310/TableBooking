import { Component ,Input,OnInit ,Injectable} from '@angular/core';
import { Restaurant } from '../restaurant.model';
import { ReservationsService } from '../reservations.service';
import { TableNumber } from 'src/app/tablenumber.service';
import { RestaurantService } from '../restaurant.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  implements OnInit {
  @Input() restaun:Restaurant;
  @Input() restauran:Restaurant;
  selectedRestaurant: Restaurant ;  
  tableNumber;


  constructor(private tableno:TableNumber,
              private reservationsService: ReservationsService,
              private restaurantService:RestaurantService,
              private http: HttpClient)
  {

  }

  ngOnInit() 
  {
    this.tableNumber = this.tableno.getTableNumber(); // get the table number from shared service 
    this.selectedRestaurant = this.restaurantService.selectedRestaurant;

  }

  onCreatePost(postData: { table: number,Name: string; email: string; phno: number; date: number; time: number }){
    console.log(postData);
    this.http.post('https://tablebooking-e9ede-default-rtdb.firebaseio.com/posts.json',
    postData).subscribe(responseData => {
      console.log(responseData);
      
    });
  }

   onFetchPosts(){  
    this.http.get('https://tablebooking-e9ede-default-rtdb.firebaseio.com/posts.json',)
  }
  

}
