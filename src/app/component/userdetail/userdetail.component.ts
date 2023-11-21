import { UserDetailService } from './../../service/user-detail.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../service/user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.css',
})
export class UserdetailComponent implements OnInit {
  constructor(private userDetailService: UserDetailService) {}
  data: any;

  ngOnInit(): void {
    this.userDetailService.getUser(1).subscribe((results: any) => {
      console.log(results);
      this.data = results;
    });
  }
}
