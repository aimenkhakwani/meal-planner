import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <h1>Meal Tracker</h1>
    </header>
    <div class="col-md-5">
     <new-meal
      (newMealSender)="addMeal($event)"
     ></new-meal>
     <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="doneEditing()"
      ></edit-meal>
    </div>
    <div class="col-md-7">
    <meal-list
      [childMealList]="mealList"
      (clickSender)="showEditForm($event)"
    ></meal-list>
    </div>
  `
})

export class AppComponent {
  public mealList: Meal[] = [
    new Meal("Scrambled Eggs", "added cheese for yum factor", 400),
    new Meal("Rice and Beans", "needed more sauce", 500),
    new Meal("Choclate Cake", "soooo good! I'll make up for it tomorrow, promise", 378),
    new Meal("Fried Chicked", "one serving", 600),
  ];

  selectedMeal: Meal = null;

  showEditForm(clickedMeal: Meal) {
   this.selectedMeal = clickedMeal;
  }

  addMeal(newMeal: Meal) {
    this.mealList.push(newMeal);
  }

  doneEditing() {
  this.selectedMeal = null;
  }
}
