import { LicensePlateService } from "./license-plate.service";
import { Component } from "@angular/core";
import { LicensePlate } from "./license-plate";
import { CALIFORNIA_PLATE, LICENSE_PLATES } from "./mock-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(service: LicensePlateService) {
    this.licensePlates = service.getList();
  }
  date = new Date();
  licensePlates: LicensePlate[] = LICENSE_PLATES;
  licensePlate: LicensePlate = CALIFORNIA_PLATE;
}
