import { Response } from '../../interface/response.interface';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) {}
  response: Array<any>;

  ngOnInit(): void {
    this.userService.getUsers(1, 5).subscribe((results: any) => {
      console.log(results);
      this.response = results;
    });
  }
}
