import { LICENSE_PLATES } from "./mock-data";
import { Injectable } from "@angular/core";
import { LicensePlate } from "./license-plate";

@Injectable({
  providedIn: "root",
})
export class LicensePlateService {
  constructor() {}

  getList(): LicensePlate[] {
    return LICENSE_PLATES;
  }
}
