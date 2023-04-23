import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant.model';
import { ReservationsService } from '../reservations.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-athidhi-layout',
  templateUrl: './athidhi-layout.component.html',
  styleUrls: ['./athidhi-layout.component.css']
})
export class AthidhiLayoutComponent 
{
    // res:Restaurant;
    // id:number;

    // constructor(private reservationsService:ReservationsService,
    //             private route : ActivatedRoute)
    // {
        
    // }

    // ngOnInit() 
    // {
    //    this.route.params.subscribe(
    //     (params:Params)=>{
    //       this.id=+params[0];
    //       this.res=this.reservationsService.getRes(this.id);

    //     }
    //    )
    // };
}
