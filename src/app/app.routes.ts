import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { EnterNumberpageComponent } from './pages/enter-numberpage/enter-numberpage.component';


export const routes: Routes = [
    { path: '',title:"home Page", component: HomepageComponent},
    { path: 'Enternumber',title:"Enter number", component: EnterNumberpageComponent},
];
