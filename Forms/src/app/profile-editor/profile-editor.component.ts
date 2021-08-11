import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  profileEditor = this.fb.group({
    firstname: ['', Validators.required],
    lasrname: [''],
    Address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.profileEditor.value);
  }

  updateProfile() {
    this.profileEditor.patchValue({
      firstname: 'Nancy',
      Address: {
        street: 'Colombo',
      },
    });
  }
}
