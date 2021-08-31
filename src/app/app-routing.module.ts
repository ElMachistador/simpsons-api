import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';


const routes: Routes = [
  { path: 'details/:index', component: QuotesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
