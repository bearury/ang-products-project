import {Component, inject, Input} from '@angular/core';
import {ModifyIdService} from "../../services/modify-id.service";
import {CurrencyPipe, DecimalPipe, NgClass, NgOptimizedImage, NgStyle, TitleCasePipe} from "@angular/common";
import {Product} from "../../entity/product";


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TitleCasePipe,
    NgClass,
    NgStyle,
    DecimalPipe,
    CurrencyPipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  @Input() product?: Product;
  details = false
  private mod: ModifyIdService = inject(ModifyIdService)


  handleClick(e: number) {
    console.log('[20] 🥕: ', this.mod.add(e))
    this.details = !this.details
  }
}
