import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FocusDirective } from '../../directives/focus.directive';
import { ProductsService } from '../../services/products.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FocusDirective,
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  disableButton = false;

  constructor(private productService: ProductsService, private modalService: ModalService) {
  }

  get title() {
    return this.form.controls.title;
  }

  ngOnInit() {

  }

  submit() {
    console.log('[39] 🚀: ', this.form.value);
    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum dolor',
      image: 'https://i.pravatar.cc',
      category: 'electronics',
      rating: {
        rate: 3,
        count: 12,
      },
    }).subscribe(() => {
      this.modalService.close();
    });
  }
}
