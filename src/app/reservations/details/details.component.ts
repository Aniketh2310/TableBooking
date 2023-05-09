import { Component ,Input,OnInit ,Injectable} from '@angular/core';
import { Restaurant } from '../restaurant.model';
import { ReservationsService } from '../reservations.service';
import { TableNumber } from 'src/app/tablenumber.service';
import { RestaurantService } from '../restaurant.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Time } from '@angular/common';
import { map } from 'rxjs';
import { bookng } from 'src/app/model/bookings';


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
  allbking:bookng[]=[];

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
    this.fetchBookings();

  }
  onBookingsFetch()
  {
    this.fetchBookings();
  }

  onCreatePost(postData: { table: number,Name: string; email: string; phno: number; date: number; time: number }){
    console.log(postData);
    this.http.post('https://tablebooking-e9ede-default-rtdb.firebaseio.com/posts.json',
    postData).subscribe(responseData => {
      console.log(responseData);
      
    });
  }

  //  onFetchPosts(){  
  //   this.http.get('https://tablebooking-e9ede-default-rtdb.firebaseio.com/posts.json',)
  // }
  onBookCreate(bookings:{firstname:string,email:string,phone:string,date:Date,time:Time,partysize:number,tablepreference:string}){
    console.log(bookings);
    
    const selectedRestaurant = this.selectedRestaurant;
    const tableNumber = this.tableNumber;
    const bookingData = {
      firstname: bookings.firstname,
      email: bookings.email,
      phone: bookings.phone,
      date: bookings.date,
      time: bookings.time,
      partysize: bookings.partysize,
      tablepreference: bookings.tablepreference,
      restaurantName: selectedRestaurant.name,
      restaurantLocation: selectedRestaurant.des,
      tableNumber: tableNumber,
      
    };
  
    const headers=new HttpHeaders({'myHeader':'proacademy'});
    this.http.post<{name:string}>('https://deepu-254a5-default-rtdb.firebaseio.com/bookingss.json',bookingData
    ,{headers:headers})
    .subscribe((res)=>{
      console.log(res);
    });
  }
  private fetchBookings(){
    this.http.get<{[key:string]:bookng}>('https://deepu-254a5-default-rtdb.firebaseio.com/bookingss.json')
    .pipe(map((res)=>{
      const bookings=[];
      for( const key in res){
        if(res.hasOwnProperty(key))
        {
          bookings.push({...res[key],id:key})
        }
        
      }
      return bookings;
    }))
    .subscribe((bookings)=>{
      console.log(bookings);
      this.allbking=bookings;
    });
  }

}
