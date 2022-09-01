import { Component } from '@angular/core';
import { meal } from './interface/meal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'myApp';
  meals: meal[] = [
    { id: 1, name: 'gheime', price: 100 },
    { id: 2, name: 'polo', price: 50 },
  ];
  loading: boolean = false;
}
