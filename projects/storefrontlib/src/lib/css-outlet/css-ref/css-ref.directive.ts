import { Directive, Input, OnInit, ElementRef } from '@angular/core';

import { CssOutletService } from '../css-outlet.service';

@Directive({
  selector: '[cxCssRef]'
})
export class CssRefDirective implements OnInit {
  @Input() cxCssRef: string;

  @Input() file: string;

  constructor(
    private tpl: ElementRef,
    private cssOutletService: CssOutletService
  ) {}

  ngOnInit() {
    this.cssOutletService.add(this.cxCssRef, this.tpl, this.file);
  }
}
