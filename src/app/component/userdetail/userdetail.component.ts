import { UserDetailService } from './../../service/user-detail.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.css',
})
export class UserdetailComponent implements OnInit {
  constructor(
    private userDetailService: UserDetailService,
    private route: ActivatedRoute
  ) {}
  data: any;

  // ngOnInit(): void {
  //   this.userDetailService.getUser(1).subscribe((results: any) => {
  //     console.log(results);
  //     this.data = results;
  //   });
  // }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      console.log(id);
      this.getDataById(id);
    });
  }

  getDataById(id: number): void {
    this.userDetailService.getUser(id).subscribe((results: any) => {
      console.log(results);
      this.data = results;
    });
  }
}
