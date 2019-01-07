import { Injectable, TemplateRef } from '@angular/core';

interface TemplateFile {
  template: TemplateRef<any>;
  file?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CssOutletService {
  private templateRefs: TemplateFile = null;

  add(outlet: string, template: TemplateRef<any>, file: string): void {
    this.templateRefs[outlet] = { template, file };
  }

  get(outlet: string): TemplateFile {
    return this.templateRefs[outlet];
  }
}
