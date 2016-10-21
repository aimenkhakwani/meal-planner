import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class="all-meals">
      <div class="form-group">
      <label>Filter by calories</label>
        <select (change)="onChange($event.target.value)" class="form-control">
          <option value="All">All Meals</option>
          <option value="lessThan500">Less than 500 cal</option>
          <option value="moreThan500">More than (or equal to) 500 cal</option>
        </select>
      </div>
      <div *ngFor="let currentMeal of childMealList | calories:selectedCalories">
        <div class="well">
          <h3 (click)="editMeal(currentMeal)" class="meal-click">{{currentMeal.name}}</h3>
          <h4>Details: {{currentMeal.description}}</h4>
          <h4>Calories: {{currentMeal.calories}}</h4>
        </div>
      </div>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editMeal(mealToEdit: Meal) {
   this.clickSender.emit(mealToEdit);
  }

  public selectedCalories: string = "All";
  onChange(caloriesOption) {
    this.selectedCalories = caloriesOption;

  }
}
