import {RouterModule,Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RoundComponent} from "./round/round.component";
import {Round2Component} from "./round/round2.component";
import {Round3Component} from "./round/round3.component";



const app_routes:Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path:'round', component:RoundComponent,pathMatch:'full'},
  { path:'round2', component:Round2Component,pathMatch:'full'},
  { path:'round3', component:Round3Component,pathMatch:'full'},
  { path:'', component:HomeComponent,pathMatch:'full'},

];

export const app_routing = RouterModule.forRoot(app_routes);
