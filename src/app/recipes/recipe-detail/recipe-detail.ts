import { Component, ChangeDetectionStrategy, input, inject } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  imports: [DropdownDirective],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetail {
  public readonly recipe = input.required<Recipe>();

  private readonly shoppingListService = inject(ShoppingListService);

  onAddToShoppingList(): void {
    this.shoppingListService.addIngredients(this.recipe().ingredients);
  }
}
