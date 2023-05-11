import { EventEmitter, Injectable } from "@angular/core";
import { Restaurant } from "./restaurant.model";

@Injectable({
  providedIn: 'root'
})

export class ReservationsService
{
    restaurantSelected=new EventEmitter<Restaurant>();
    // selectedRestaurant: Restaurant;


    private restaurants:Restaurant[]=[
    new Restaurant('Athidhi Biryani House','Vanasthalipuram,Hyderabad','https://i.pinimg.com/originals/05/64/c4/0564c4cc63bd2b27360e0cb6b19484ae.jpg'),
    new Restaurant('Swagath Grand','L.B.Nagar,Hyderabad','https://estateintel.com/app/uploads/2020/04/01a_hilton-hotel-lagos3.jpg'),
    new Restaurant('Barbeque Nation','Kothapet,Hyderabad','https://th.bing.com/th/id/OIP.roXJLlrD2B_MPLt6RiwrjgHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'),
    new Restaurant('Athedhi','Kothapet,Hyderabad','https://th.bing.com/th/id/OIP.roXJLlrD2B_MPLt6RiwrjgHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7')
  ];


  getRestaurants()
  {
    return this.restaurants.slice();
  }

  getRes(id:number)
  {
    return this.restaurants[id];
  }
  
  
  
}