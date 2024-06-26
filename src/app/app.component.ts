import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe, NgIf, TitleCasePipe } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductsService } from './services/products.service';
import { Product } from './entity/product';
import { Observable } from 'rxjs';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ModalService } from './services/modal.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TitleCasePipe, ProductsComponent, RouterLinkActive, NgIf, AsyncPipe, GlobalErrorComponent, FormsModule, FilterProductsPipe, ModalComponent, CreateProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'This is my test project!';
  // products: Product[] = [];
  loading = false;
  products$?: Observable<Product[]>;
  term: string;

  constructor(public productsService: ProductsService, public modalService: ModalService) {
    this.term = '';
  }

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    });
    // this.products$ = this.productsService.getAll().pipe(tap(() => this.loading = false));
  }
}
