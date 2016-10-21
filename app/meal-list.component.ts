import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div *ngFor="let currentMeal of childMealList">
      <div class="well">
        <h3>{{currentMeal.name}}</h3>
        <h4>Details: {{currentMeal.description}}</h4>
        <h4>Calories: {{currentMeal.calories}}</h4>
      </div>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

}
