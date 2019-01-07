import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[cxCssRef]'
})
export class CssRefDirective implements OnInit {
  @Input() cxCssRef: string;

  @Input() file: string;

  ngOnInit() {}
}
