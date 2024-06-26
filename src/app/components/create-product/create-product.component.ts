import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent {

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  get title() {
    return this.form.controls.title;
  }

  submit() {
    console.log(this.form.value);


    console.log('🍁: ', this.title);

  }

  changeInput() {
    if (this.title.touched && this.title.dirty) {
      this.form.reset();
    }
  }
}
