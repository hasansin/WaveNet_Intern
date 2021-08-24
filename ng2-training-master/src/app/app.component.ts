import { Observable } from "rxjs/index";
import { LicensePlateService } from "./license-plate.service";
import { Component } from "@angular/core";
import { LicensePlate } from "./license-plate";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  licensePlates$: Observable<LicensePlate[]>;
  subscription: Subscription;
  date = new Date();

  constructor(service: LicensePlateService) {
    this.licensePlates$ = service.getList();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
