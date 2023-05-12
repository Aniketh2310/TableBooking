import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant.model';
import { ReservationsService } from '../reservations.service';
import { TableNumber } from 'src/app/tablenumber.service';
import { RestaurantService } from '../restaurant.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Time } from '@angular/common';
import { map } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() restaun: Restaurant;
  @Input() restauran: Restaurant;
  selectedRestaurant: Restaurant;
  tableNumber: number;
  selectedDate: Date;
  minDate: Date;
  maxDate: Date;
  todayDate: Date;

  constructor(
    private tableno: TableNumber,
    private reservationsService: ReservationsService,
    private restaurantService: RestaurantService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.tableNumber = this.tableno.getTableNumber(); // get the table number from shared service
    this.selectedRestaurant = this.restaurantService.selectedRestaurant;
    this.setCalendarMinAndMaxDates();
  }

  setCalendarMinAndMaxDates() {
    const today = new Date();
    this.todayDate = today;
    this.minDate = today;
    this.maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
  }

  dateFilter = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6 && date >= this.todayDate && date <= this.maxDate;
  }

  onBookCreate(bookings: {
    firstname: string;
    email: string;
    phone: string;
    date: Date;
    time: Time;
  }) {
    console.log(bookings);

    const selectedRestaurant = this.selectedRestaurant;
    const tableNumber = this.tableNumber;
    const bookingData = {
      firstname: bookings.firstname,
      email: bookings.email,
      phone: bookings.phone,
      date: bookings.date,
      time: bookings.time,
      restaurantName: selectedRestaurant.name,
      restaurantLocation: selectedRestaurant.des,
      tableNumber: tableNumber
    };

    const headers = new HttpHeaders({ myHeader: 'proacademy' });
    this.http
      .post<{ name: string }>('https://deepu-254a5-default-rtdb.firebaseio.com/bookingss.json', bookingData, { headers: headers })
      .subscribe(res => {
        console.log(res);
      });
  }
}
