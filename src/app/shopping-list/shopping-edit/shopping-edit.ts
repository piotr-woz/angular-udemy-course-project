import { Component, ChangeDetectionStrategy, viewChild, ElementRef, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  imports: [FormsModule],
  templateUrl: './shopping-edit.html',
  styleUrl: './shopping-edit.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingEdit {
  private readonly shoppingListService = inject(ShoppingListService);

  private readonly nameValueRef = viewChild<ElementRef<HTMLInputElement>>('nameInput');
  private readonly amountValueRef = viewChild<ElementRef<HTMLInputElement>>('amountInput');

  protected onAddIngredient(): void {
    this.shoppingListService.addIngredients([
      {
        name: this.nameValueRef()?.nativeElement.value,
        amount: Number(this.amountValueRef()?.nativeElement.value),
      },
    ]);
  }
}
