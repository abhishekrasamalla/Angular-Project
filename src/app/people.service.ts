import { Injectable } from '@angular/core';

export interface Person {
  id: number;
  name: string;
  age: number;
  gender: string;
  country: string;
}

@Injectable({ //decorator is used to define this class as a service that can be injected into other classes.
  providedIn: 'root' //property makes the service available application-wide.
})
export class PeopleService {
  private people: Person[] = [ //people is an array of Person objects
    { id: 1, name: 'Abhishek', age: 25, gender: 'Male', country: 'India' },
    { id: 2, name: 'Ravi', age: 22, gender: 'Male' , country: 'India'},
    { id: 3, name: 'Raju', age: 27, gender: 'Male', country: 'India'},
    { id: 4, name: 'Akhila', age: 19, gender: 'Female', country: 'India'},
    { id: 5, name: 'Ajith', age: 30, gender: 'Male' , country: 'India'},
    { id: 6, name: 'Jessica', age: 23, gender:'Female', country: 'India'},
    { id: 7, name: 'Pranay', age: 19, gender: 'Male', country: 'India'}

  ];

  getPeople() {
    return this.people;
  }

  getPerson(id: number) {
    return this.people.find(person => person.id === id);
  }

  updatePerson(updatedPerson: Person) {
    const index = this.people.findIndex(person => person.id === updatedPerson.id);
    if (index !== -1) {
      this.people[index] = updatedPerson;
    }
  }

  deletePerson(id: number) {
    this.people = this.people.filter(person => person.id !== id);
  }
}
