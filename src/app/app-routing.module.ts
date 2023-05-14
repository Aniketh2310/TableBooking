import { NgModule } from "@angular/core";
import { Routes , RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AthidhiLayoutComponent } from "./reservations/athidhi-layout/athidhi-layout.component";
import { SwagathComponent } from "./swagath/swagath.component";
import { DetailsComponent } from "./reservations/details/details.component";
import { TableComponent } from "./table/table.component";



const appRoutes:Routes=
[
    
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'reservations',component:ReservationsComponent,},
    {path:'reservations/0',component:AthidhiLayoutComponent },    
    {path:'reservations/1',component:SwagathComponent},
    {path:'details',component:DetailsComponent},
    {path:'thankyou',component:TableComponent}
    
]

@NgModule
({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
   
})

export class AppRoutingModule
{

}