import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  name = new FormControl(' ', [
    Validators.required,
    Validators.maxLength(10),
    Validators.pattern("^[a-zA-Z -']+"),
  ]);
  constructor() {}

  ngOnInit(): void {}

  updateName(): void {
    this.name.setValue('Nancy');
  }
}
