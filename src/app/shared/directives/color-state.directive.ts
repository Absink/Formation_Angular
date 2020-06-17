import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appColorState]'
})
export class ColorStateDirective implements OnChanges {

  @Input() appColorState: string;
  @HostBinding('class') className: string;

  constructor() { }

  ngOnChanges() {
    this.className = this.formatClass(this.appColorState);
  }

  private formatClass(state: string): string {
    return `state-${state.replace(/\s/g, '').toLowerCase()}`;
  }

}
