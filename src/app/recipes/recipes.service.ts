import { Injectable, signal } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private readonly recipes_ = signal<Recipe[]>([
    {
      id: '1',
      name: 'A Test Recipe 1',
      description: 'This is simply a test!',
      imagePath: 'recipe1.jpg',
      ingredients: [
        { name: 'Meat', amount: 1 },
        { name: 'French Fries', amount: 20 },
      ],
    },
    {
      id: '2',
      name: 'A Test Recipe 2',
      description: 'This is simply a test!',
      imagePath: 'recipe1.jpg',
      ingredients: [
        { name: 'Meat', amount: 2 },
        { name: 'French Fries', amount: 15 },
      ],
    },
  ]);

  public readonly recipes = this.recipes_.asReadonly();

  public readonly recipeSelected = signal<Recipe | undefined>(undefined);

  selectRecipe(recipe: Recipe): void {
    this.recipeSelected.set(recipe);
  }
}
