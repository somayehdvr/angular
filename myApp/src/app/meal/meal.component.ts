import { Component } from '@angular/core';

interface meal {
  id: number;
  name: string;
  price: number;
}

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
