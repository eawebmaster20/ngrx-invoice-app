import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InvoiceDetailsPageComponent } from './pages/invoice-details-page/invoice-details-page.component';

export const routes: Routes = [
    {path: '', component:HomePageComponent},
    {path:'details', component:InvoiceDetailsPageComponent}
];
