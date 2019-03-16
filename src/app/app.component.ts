import { Component } from '@angular/core';

@Component({
  selector: 'pm-root', // pm for product management, root app component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}