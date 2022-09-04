import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { meal } from './interface/meal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {  }
  title: string = 'myApp';
  meals: meal[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.meals = this.appService.getMeals()
  }
}
