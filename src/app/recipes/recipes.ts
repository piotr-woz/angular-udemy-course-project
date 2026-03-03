import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeDetail } from './recipe-detail/recipe-detail';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  imports: [RecipeList, RecipeDetail],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Recipes {
  private readonly recipesService = inject(RecipesService);

  protected readonly selectedRecipe = this.recipesService.recipeSelected;
}
