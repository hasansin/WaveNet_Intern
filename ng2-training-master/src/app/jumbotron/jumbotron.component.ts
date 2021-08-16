import { Input } from "@angular/core";
import { Component } from "@angular/core";

@Component({
  selector: "app-jumbotron",
  templateUrl: "./jumbotron.component.html",
  styleUrls: ["./jumbotron.component.css"],
})
export class JumbotronComponent {
  @Input()
  title: string | undefined;
  @Input()
  description: string | undefined;
  constructor() {}
}
