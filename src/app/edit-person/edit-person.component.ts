// src/app/edit-person/edit-person.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 //ActivatedRoute and Router help us work with URLs and navigate between different pages.
import { PeopleService, Person } from '../people.service';

@Component({
  selector: 'app-edit-person',  //selector: The name we use to include this component in HTML.
  templateUrl: './edit-person.component.html',  //templateUrl: The HTML file for this component.
  styleUrls: ['./edit-person.component.css']  //styleUrls: The CSS file for this component.
})
export class EditPersonComponent implements OnInit {
  person: Person | undefined; // Allow undefined

  constructor(
    private route: ActivatedRoute, //It provides information about the route associated with the component. 
                                    //This includes parameters, query parameters, and the current route data.
                                    // Provides access to route information.
    private router: Router, // It allows programmatic navigation between routes within the application.
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //snapshot is a property of the ActivatedRoute service that provides a static snapshot of the route at the time the component is initialized.
    // It contains route parameters, query parameters, and other route-related data.

    //paramMap is a map containing the route parameters. You use it to get parameters from the URL.
    this.person = this.peopleService.getPerson(id);
  }

  save() {
    if (this.person) {
      this.peopleService.updatePerson(this.person);
      this.router.navigate(['/']);
    }
  }
}
