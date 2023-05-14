
import { Component, Input, OnInit, Injectable } from '@angular/core';
import { Restaurant } from '../restaurant.model';
import { ReservationsService } from '../reservations.service';
import { TableNumber } from 'src/app/tablenumber.service';
import { RestaurantService } from '../restaurant.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Time } from '@angular/common';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { DetailsExist } from '../detailsexist.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit 
{
  @Input() restaun: Restaurant;
  @Input() restauran: Restaurant;
  selectedRestaurant: Restaurant;
  tableNumber;
  submitted = false;
  minDate: string;
  maxDate: string;
  

  constructor(private tableno: TableNumber,
              private reservationsService: ReservationsService,
              private restaurantService: RestaurantService,
              private detailsexist:DetailsExist,
              private router: Router,
              private http: HttpClient)    
    {
      
       const currentDate = new Date();
       const maxDate = new Date(currentDate.setDate(currentDate.getDate() + 7));
       this.maxDate = maxDate.toISOString().split('T')[0];
    } 

  ngOnInit() 
  {
    this.tableNumber = this.tableno.getTableNumber(); 
    this.selectedRestaurant = this.restaurantService.selectedRestaurant;  

  }
  

  onBookCreate(bookings: { firstname: string, email: string, phone: string, date: Date, time: Time }) 
  {
    console.log(bookings);

    const selectedRestaurant = this.selectedRestaurant;
    const tableNumber = this.tableNumber;
    const bookingData = 
    {
      firstname: bookings.firstname,
      email: bookings.email,
      phone: bookings.phone,
      date: bookings.date,
      time: bookings.time,      
      restaurantName: selectedRestaurant.name,
      restaurantLocation: selectedRestaurant.des,
      tableNumber: tableNumber,

    };

    // Check if the booking already exists
    this.detailsexist.getBookings(selectedRestaurant.name, tableNumber, bookingData.date, bookingData.time)
    .subscribe((bookings) => 
    {
      const existingBooking = bookings.find((booking: any) =>
      booking.restaurantName === bookingData.restaurantName &&
      booking.tableNumber === bookingData.tableNumber &&
      booking.date === bookingData.date &&
      booking.time === bookingData.time
    );

      if (existingBooking) 
      {
        alert(`The table ${tableNumber} in ${selectedRestaurant.name} has already been booked for ${bookingData.date} at ${bookingData.time}. Please select a different Date or time.`);
      } 
      else 
      {
        const headers = new HttpHeaders({ 'myHeader': 'proacademy' });
        this.http.post<{ name: string }>('https://bookmytable-49ecc-default-rtdb.firebaseio.com/bookingss.json', bookingData, { headers: headers })
          .subscribe((res) => {
            console.log(res);
            alert("Booking successful!"); 
            this.submitted = true;           
            this.router.navigate(['/thankyou']);
          });
      }
    });   
        
  }

  getCurrentDate() 
  {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}

 

    



  //for post method::
  // private fetchBookings(){
  //   this.http.get<{[key:string]:bookng}>('https://deepu-254a5-default-rtdb.firebaseio.com/bookingss.json')
  //   .pipe(map((res)=>{
  //     const bookings=[];
  //     for( const key in res){
  //       if(res.hasOwnProperty(key))
  //       {
  //         bookings.push({...res[key],id:key})
  //       }

  //     }
  //     return bookings;
  //   }))
  //   .subscribe((bookings)=>{
  //     console.log(bookings);
  //     this.allbking=bookings;
  //   });
  // }

























