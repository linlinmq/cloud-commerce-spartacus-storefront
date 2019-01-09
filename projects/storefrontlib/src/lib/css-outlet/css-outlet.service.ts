import { Injectable, ElementRef } from '@angular/core';

interface ElemFile {
  elem?: ElementRef<any>;
  file?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CssOutletService {
  private templateRefs: ElemFile = {};

  add(outlet: string, elem: ElementRef<any>, file: string): void {
    this.templateRefs[outlet] = { elem, file };
  }

  get(outlet: string): ElemFile {
    return this.templateRefs[outlet];
  }
}
