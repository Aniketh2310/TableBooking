import { EventEmitter, Injectable,OnInit } from "@angular/core";
import { Restaurant } from "./restaurant.model";
import { HttpClient } from '@angular/common/http';
import { TableNumber } from 'src/app/tablenumber.service';
import { RestaurantService } from './restaurant.service';
import { map } from 'rxjs/operators';
import { Time } from "@angular/common";


interface Booking 
{
 
    firstname: string,
    email: string,
    phone: string,
    date: string,
    time: string,
    restaurantName: string,
    restaurantLocation: string,
    tableNumber: number,
    id?: string
 
}


@Injectable({
 providedIn: 'root'
})

export class DetailsExist implements OnInit
{
    bookings: any[];
    selectedRestaurant: Restaurant;
    tableNumber: number;
    selectedDate: Date;
    selectedTime: string;

    constructor(private http: HttpClient,
        private tableno: TableNumber,
        private restaurantService: RestaurantService) {}


    ngOnInit() 
    {
        // Set the selected restaurant and table number
        this.selectedRestaurant = this.restaurantService.selectedRestaurant;
        this.tableNumber = this.tableno.getTableNumber();
        
        // Set the default selected date and time to the current date and time
        const currentDate = new Date();
        this.selectedDate = currentDate;
        this.selectedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    }

    getBookings(selectedRestaurantName: string, tableNumber: string, selectedDate: Date, selectedTime: Time) 
    {
        return this.http.get<any[]>('https://bookmytable-49ecc-default-rtdb.firebaseio.com/bookingss.json')
          .pipe(
            map((bookings) => 
            {
              if (bookings) {
                const bookingsArray = Object.values(bookings);
                return bookingsArray.filter((booking: any) => 
                {
                  return booking.restaurantName === selectedRestaurantName 
                          && booking.tableNumber === tableNumber 
                          && booking.date === selectedDate 
                          && booking.time === selectedTime;
                });
              } 
              else 
              {
                return [];
              }
            })
          );
      }
}