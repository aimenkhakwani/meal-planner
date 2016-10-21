import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
   <h1>Meal Tracker</h1>
   <div class="col-md-6">
      <meal-list
      [childMealList]="mealList"
      (clickSender)="showDetails($event)"
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

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
  this.selectedMeal = clickedMeal;
  }
}
