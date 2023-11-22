import { UserDetailService } from './../../service/user-detail.service';
import { Component, OnInit } from '@angular/core';
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
  
  ngOnInit(): void {
    //ambil id dari URL sebagai parameter
    this.route.params.subscribe((params) => {
      const id = params['id'];
      console.log(id);
      //ambil data customer berdasarkan id
      this.getDataById(id);
    });
  }

  //fungsi untuk mengambil data customer berdasarkan id, dan tampung pada results
  getDataById(id: number): void {
    this.userDetailService.getUser(id).subscribe((results: any) => {
      console.log(results); //tampilkan hasilnya di console
      this.data = results; //kirim results ke data
    });
  }
}
