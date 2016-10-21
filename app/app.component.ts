import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
   <h1>Meal Tracker</h1>
   <div class="col-md-6">
     <h2>Add a Meal</h2>
     <new-meal
      (newMealSender)="addMeal($event)"
     ></new-meal>
   </div>
   <div class="col-md-6">
    <h2>Meals:</h2>
    <meal-list
      [childMealList]="mealList"
    ></meal-list>
   </div>
  `
})

export class AppComponent {
  public mealList: Meal[] = [
    new Meal("Scrambled Eggs", "added cheese for yum factor", 400),
    new Meal("Rice and Beans", "needed more sauce", 550),
    new Meal("Choclate Cake", "soooo good!", 378),
  ];

  addMeal(newMeal: Meal) {
    this.mealList.push(newMeal);
  }
}
