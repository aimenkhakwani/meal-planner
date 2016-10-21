import { Component, Output, EventEmitter }  from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div>
      <div class="form-group">
        <label>Enter meal name:</label>
        <input class="form-control" #mealName>
      </div>
      <div class="form-group">
        <label>Enter details:</label>
        <input class="form-control" #mealDetails>
      </div>
      <div class="form-group">
        <label>Enter calories:</label>
        <input class="form-control" #mealCalories>
      </div>
      <button (click)="
        addClicked(mealName.value, mealDetails.value, mealCalories.value);
        mealName.value='';
        mealDetails.value='';
        mealCalories.value='';
        " class="btn btn-default">Add</button>
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
