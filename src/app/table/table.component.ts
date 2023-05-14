import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


interface User {
  id: string;
  firstname: string;
  email: string;
  phone: string;
  date: Date;
  time: Time;
  restaurantName: string;
  restaurantLocation: string;
  tableNumber: string;
  timestamp: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit
{
  user: User;
  
  
  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router) {}

  ngOnInit() 
  {
    
    this.fetchUser();
  }


  fetchUser() 
  {
    this.http.get<{ [key: string]: User }>('https://bookmytable-49ecc-default-rtdb.firebaseio.com/bookingss.json')
      .subscribe(usersData => {
        const users: User[] = [];
        for (const key in usersData) {
          if (usersData.hasOwnProperty(key)) {
            users.push({ ...usersData[key], id: key });
          }
        }
        users.sort((a, b) => (b.timestamp > a.timestamp) ? 1 : -1);
        this.user = users[0];
      });
  }

  onButtonClick() 
  {
    this.router.navigate(['/home']);
  }
  
}



  // fetchUsers() {
  //   this.http.get<{ [key: string]: User }>('https://bookmytable-49ecc-default-rtdb.firebaseio.com/bookingss.json')
  //     .subscribe(usersData => {
  //       const users: User[] = [];
  //       for (const key in usersData) {
  //         if (usersData.hasOwnProperty(key)) {
  //           users.push({ ...usersData[key], id: key });
  //         }
  //       }
  //       this.users = users;
  //     });
  // }

  // fetchUsers(){
  //     this.http.get<{[key:string]:bookng}>('https://deepu-254a5-default-rtdb.firebaseio.com/bookingss.json')
  //     .pipe(map((res)=>{
  //       const bookings=[];
  //       for( const key in res){
  //         if(res.hasOwnProperty(key))
  //         {
  //           bookings.push({...res[key],id:key})
  //         }
  
  //       }
  //       return bookings;
  //     }))
  //     .subscribe((bookings)=>{
  //       console.log(bookings);
  //       this.allbking=bookings;
  //     });
  //   }
  
 

