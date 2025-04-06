import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { EnterNumberpageComponent } from './pages/enter-numberpage/enter-numberpage.component';
import { UserRegisterComponent } from './pages/register/user-register/user-register.component';


export const routes: Routes = [
    { path: '',title:"home Page", component: HomepageComponent},
    { path: 'user-info/:cellnumber',title:"Userinfo", component: EnterNumberpageComponent},
    { path: 'user-register/:cellnumber',title:"UserRegister", component: UserRegisterComponent},
];
