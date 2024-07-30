// src/app/delete-person/delete-person.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService, Person } from '../people.service';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent implements OnInit {
  person: Person | undefined; // Allow undefined

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.person = this.peopleService.getPerson(id);
  }

  delete() {
    if (this.person) {
      this.peopleService.deletePerson(this.person.id);
      this.router.navigate(['/']);
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
