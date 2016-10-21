import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div *ngFor="let currentMeal of childMealList">
      <h3 (click)="showMeal(currentMeal)">{{currentMeal.name}}</h3>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  showMeal(mealToDisplay: Meal){
  this.clickSender.emit(mealToDisplay);
  }
}
