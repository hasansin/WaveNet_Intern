import { LicensePlateService } from "./license-plate.service";
import { Component } from "@angular/core";
import { LicensePlate } from "./license-plate";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  licensePlates: LicensePlate[];
  subscription: Subscription;
  date = new Date();

  constructor(service: LicensePlateService) {
    this.subscription = service
      .getList()
      .subscribe((data) => (this.licensePlates = data));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
