import { Component } from '@angular/core';
 //The Component decorator is used to define the metadata for the component, such as its selector, template, and styles.
@Component({
  selector: 'app-root', //defines the custom HTML tag that represents the component. This tag is used in HTML to include the component. 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PeopleManager';
}
