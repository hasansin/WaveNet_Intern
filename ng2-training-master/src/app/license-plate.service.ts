import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs/index";
import { Injectable } from "@angular/core";
import { LicensePlate } from "./license-plate";

@Injectable({
  providedIn: "root",
})
export class LicensePlateService {
  baseURL = "http://localhost:8000/data";
  constructor(private http: HttpClient) {}

  getList(): Observable<LicensePlate[]> {
    return this.http.get<LicensePlate[]>(this.baseURL);
  }
}
