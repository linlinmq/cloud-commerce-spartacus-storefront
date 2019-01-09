import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

import { CssOutletService } from './css-outlet.service';

@Directive({
  selector: '[cxCssOutlet]'
})
export class CssOutletDirective implements OnInit {
  @Input() cxCssOutlet: string;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private cssOutletService: CssOutletService
  ) {}

  ngOnInit() {
    this.renderTemplate();
  }

  private renderTemplate(): void {
    const elem = this.cssOutletService.get(this.cxCssOutlet);

    elem.elem.nativeElement.rel = 'stylesheet';
    this.renderer.appendChild(
      this.el.nativeElement.parentNode,
      elem.elem.nativeElement
    );
  }
}
