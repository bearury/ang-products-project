import { Component, inject, Input } from '@angular/core';
import { ModifyIdService } from '../../services/modify-id.service';
import { CurrencyPipe, DecimalPipe, NgClass, NgOptimizedImage, NgStyle, TitleCasePipe } from '@angular/common';
import { Product } from '../../entity/product';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TitleCasePipe,
    NgClass,
    NgStyle,
    DecimalPipe,
    CurrencyPipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          maxHeight: '500px',
          opacity: 1,
        }),
      ),
      state(
        'closed',
        style({
          maxHeight: '0px',
          opacity: 0,
        }),
      ),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class ProductsComponent {
  @Input() product?: Product;
  details = false;
  private mod: ModifyIdService = inject(ModifyIdService);

  handleClick(e: number) {
    console.log('[20] 🥕: ', this.mod.add(e));
    this.details = !this.details;
  }
}
