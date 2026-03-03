import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.html',
  styleUrl: './recipe-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'd-flex justify-content-between align-items-center',
    '(click)': 'onRecipeSelected()',
  },
})
export class RecipeItem {
  public readonly recipe = input.required<Recipe>();

  private readonly recipesService = inject(RecipesService);

  protected onRecipeSelected() {
    this.recipesService.onSelectRecipe(this.recipe());
  }
}
