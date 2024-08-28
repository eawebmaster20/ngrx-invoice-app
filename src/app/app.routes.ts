import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InvoiceDetailsPageComponent } from './pages/invoice-details-page/invoice-details-page.component';
import { FormComponent } from './shared/components/form/form.component';

export const routes: Routes = [
    {path: '', component:FormComponent},
    {path:'details/:id', component:InvoiceDetailsPageComponent}
];
