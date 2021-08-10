import { Injectable, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LogInComponent } from "./log-in/log-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UsersComponent } from "./users/users.component";
import { WelcomeComponent } from "./welcome/welcome.component";
const routes:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'log-in',component:LogInComponent},
    {path:'sign-up',component:SignUpComponent},
    {path:'users',component:UsersComponent},
    {path:'welcome',component:WelcomeComponent}
];
@NgModule(
    {
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule]
    }
   
    
    
)
@Injectable({providedIn:'root'})
export class AppRouterModule {
   

}