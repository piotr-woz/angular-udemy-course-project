import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RecipeItem } from './recipe-item/recipe-item';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItem],
  templateUrl: './recipe-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeList {
  private readonly recipesService = inject(RecipesService);

  protected readonly recipes = this.recipesService.recipes;
}
