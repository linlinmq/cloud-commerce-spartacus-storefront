import {
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
  TemplateRef
} from '@angular/core';

import { CssOutletService } from './css-outlet.service';

@Directive({
  selector: '[cxCssOutlet]'
})
export class CssOutletDirective implements OnInit {
  @Input() cxCssOutlet: string;

  private _context: string;
  @Input()
  set cxCssOutletContext(value: string) {
    this._context = value;
  }

  constructor(
    private vcr: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private cssOutletService: CssOutletService
  ) {}

  ngOnInit() {
    this.renderTemplate();
  }

  private renderTemplate(): void {
    const template = this.cssOutletService.get(this.cxCssOutlet);
    if (template) {
      this.vcr.createEmbeddedView(template.template || this.templateRef, {
        $implicit: this.context
      });
    }
  }

  private get context() {
    if (this._context) {
      return this._context;
    }

    const ctx = (<any>this.vcr.injector).view.context;

    return ctx.$implicit || ctx;
  }
}
