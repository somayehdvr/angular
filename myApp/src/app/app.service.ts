import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getMeals() {
    return [
      { id: 1, name: 'gheime', price: 100 },
      { id: 2, name: 'polo', price: 50 },
    ]
  }
}
