import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]',
  standalone: true,
})
export class FocusDirective implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }

}
