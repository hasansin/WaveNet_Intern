import { LicensePlateService } from "./license-plate.service";
import { Component } from "@angular/core";
import { LicensePlate } from "./license-plate";
import { CALIFORNIA_PLATE, LICENSE_PLATES } from "./mock-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  licensePlates: LicensePlate[];
  constructor(service: LicensePlateService) {
    service.getList().subscribe((data) => (this.licensePlates = data));
  }
  date = new Date();
}
