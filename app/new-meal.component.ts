import { Component, Output, EventEmitter }  from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div class="new-meal">
      <h2>Add a Meal</h2>
      <div class="form-group">
        <input class="form-control" placeholder="Meal name" #mealName>
      </div>
      <div class="form-group">
        <input class="form-control" placeholder="Calories" #mealCalories>
      </div>
      <div class="form-group">
        <textarea class="form-control" placeholder="Details" #mealDetails></textarea>
      </div>
      <button (click)="
        addClicked(mealName.value, mealDetails.value, mealCalories.value);
        mealName.value='';
        mealDetails.value='';
        mealCalories.value='';
        " class="btn btn-default center-block">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, description: string, calories: number) {
    var newMeal: Meal = new Meal(name, description, calories);
    this.newMealSender.emit(newMeal);
  }
}
