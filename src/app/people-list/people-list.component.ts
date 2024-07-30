// src/app/people-list/people-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = []; // Initialize the array

  constructor(private peopleService: PeopleService) { 
    //Angular's dependency injection system automatically provides an instance of PeopleService to this class.
  }

  ngOnInit() {
    this.people = this.peopleService.getPeople();
  }
}
