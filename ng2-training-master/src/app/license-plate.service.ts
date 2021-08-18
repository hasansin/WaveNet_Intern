import { Observable, of } from "rxjs/index";
import { LICENSE_PLATES } from "./mock-data";
import { Injectable } from "@angular/core";
import { LicensePlate } from "./license-plate";

@Injectable({
  providedIn: "root",
})
export class LicensePlateService {
  constructor() {}

  getList(): Observable<LicensePlate[]> {
    return of(LICENSE_PLATES);
  }
}
