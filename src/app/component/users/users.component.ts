import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}
  response: Array<any>;
  searchResponse: Array<any>;
  page: number;
  limit: number;
  prevPage: number;
  nextPage: number;
  searchTerm: string = '';
  loading: boolean = false;
  // max: boolean;

  // ngOnInit(): void {
  //   this.userService.getUsers(1, 5).subscribe((results: any) => {
  //     console.log(results);
  //     this.response = results;
  //   });
  // }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const page = params['page'];
      const limit = params['limit'];
      console.log('page' + page);
      console.log('limit' + limit);
      this.getDataById(page, limit);
    });
  }

  getDataById(page: number, limit: number): void {
    this.loading = true;
    this.userService.getUsers(page, limit).subscribe((results: any) => {
      console.log(results);
      this.response = results;
      this.page = page;
      this.loading = false;
      this.prevPage = Number(page) - Number(1);
      if (this.prevPage <= 0) {
        this.prevPage = 1;
      }
      this.nextPage = Number(page) + Number(1);
      if (this.response.length < this.limit) {
        this.nextPage = page;
        // this.max = false;
      }
      this.limit = limit;
    });
  }

  searchByName() {
    this.loading = true;
    if (this.searchTerm.trim() !== '') {
      console.log(this.searchTerm)
      this.loading = false;
      this.searchResponse = this.response.filter((item) =>
        item.customer_name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
