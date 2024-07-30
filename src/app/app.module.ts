import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //includes ngIf and ngFor
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; //It provide directives like ngModel for two-way data binding

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';

const appRoutes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'edit/:id', component: EditPersonComponent },
  { path: 'delete/:id', component: DeletePersonComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    EditPersonComponent,
    DeletePersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [], //used to define services that this module contributes to the global collection of services. 
                 //Since it's empty, no services are being provided by this module specifically.
  bootstrap: [AppComponent]
})
export class AppModule { }
