import { DataService } from './../shared/data.service';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService],
})
export class UserComponent implements OnInit {
  user!: { name: string };
  IsLoggeddIn!: false;
  data!: string;

  constructor(
    private UserService: UserService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.user = this.UserService.user;
    this.dataService.getDetails().then((data) => this.data == data);
  }
}
