import { Injectable, signal } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  private readonly _ingredients = signal<Ingredient[]>([
    { name: 'Apples', amount: 5 },
    { name: 'Tomatoes', amount: 10 },
  ]);

  public readonly ingredients = this._ingredients.asReadonly();

  addIngredients(newIngredients: Ingredient[]): void {
    this._ingredients.update((ingredients) => [...ingredients, ...newIngredients]);
  }
}
