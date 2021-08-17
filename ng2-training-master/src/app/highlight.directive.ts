import { HostBinding, HostListener } from "@angular/core";
import { Directive } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  constructor() {}
  @HostBinding("style.backgroundColor")
  backgroundColur: string;

  @HostListener("mouseover")
  onMouseOver() {
    this.backgroundColur = "#F5F5F5";
  }

  @HostListener("mouseout")
  onMouseOut() {
    this.backgroundColur = "#FFFFFF";
  }
}
