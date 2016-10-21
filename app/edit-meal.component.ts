import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal" class="edit-meal">
    <h2>Edit Meal</h2>
      <div class="form-group">
        <input class="form-control" [(ngModel)]="childSelectedMeal.name">
      </div>
      <div class="form-group">
        <input class="form-control" [(ngModel)]="childSelectedMeal.description">
      </div>
      <div class="form-group">
        <input class="form-control" [(ngModel)]="childSelectedMeal.calories">
      </div>
      <button class="btn btn-default center-block" (click)="doneClicked()">Update</button>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();

  doneClicked() {
    this.doneClickedSender.emit();
  }
}
