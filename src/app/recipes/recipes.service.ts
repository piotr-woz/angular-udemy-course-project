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
    },
    {
      id: '2',
      name: 'A Test Recipe 2',
      description: 'This is simply a test!',
      imagePath: 'recipe1.jpg',
    },
    {
      id: '3',
      name: 'A Test Recipe 3',
      description: 'This is simply a test!',
      imagePath: 'recipe1.jpg',
    },
  ]);

  public readonly recipes = this.recipes_.asReadonly;

  public readonly recipeSelected = signal<Recipe | undefined>(undefined);

  onSelectRecipe(recipe: Recipe) {
    this.recipeSelected.set(recipe);
  }
}
