import { Injectable, signal } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  private readonly ingredients_ = signal<Ingredient[]>([
    { name: 'Apples', amount: 5 },
    { name: 'Tomatoes', amount: 10 },
  ]);

  public readonly ingredients = this.ingredients_.asReadonly();

  addIngredient(ingredient: Ingredient): void {
    this.ingredients_.update((ingredients) => [...ingredients, ingredient]);
  }
}
