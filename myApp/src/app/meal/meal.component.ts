import { Component, Input, OnInit } from '@angular/core';
import { meal } from '../interface/meal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
})
export class mealComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    
  }
  @Input() key = 0;
  @Input() meal: meal = {
    id: 0,
    name: '',
    price: 0
  };
  @Input() price = 0;
}
