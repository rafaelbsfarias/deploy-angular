import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = 'Lorem Ipsum';
  logo: string = 'https://octodex.github.com//images/adventure-cat.png';
}
