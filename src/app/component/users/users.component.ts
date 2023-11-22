import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  response: Array<any>; //untuk menampung semua data
  searchResponse: Array<any>; //untuk menampung data hasil pencarian
  page: number;
  limit: number;
  limitData: number;
  prevPage: number; //page - 1
  nextPage: number; //page + 1
  searchTerm: string = ''; //kata kunci pencarian
  loading: boolean = false; //loading, muncul ketika true

  ngOnInit(): void {
    //ambil page dan limit dari URL, dan gunakan untuk menampilkan data sesuai page dan limit
    this.route.params.subscribe((params) => {
      const page = params['page'];
      const limit = params['limit'];
      this.getDataByPageLimit(page, limit);
    });
  }

  //fungsi untuk mengambil data sesuai page dan limit
  getDataByPageLimit(page: number, limit: number): void {
    this.loading = true; //loading
    //tampung hasilnya di results
    this.userService.getUsers(page, limit).subscribe((results: any) => {
      console.log(results); //log ke console
      this.response = results; //salin results ke response untuk dikirim ke template html
      this.page = page; //dapatkan nomor halaman saat ini
      this.loading = false; //hentikan loading

      //fungsi untuk tombol previous. Jika halaman kurang dari atau = 1, maka kembalikan ke halaman 1
      this.prevPage = Number(page) - Number(1);
      if (this.prevPage <= 1) {
        this.prevPage = 1;
      }

      //fungsi untuk tombol next. Jika jumlah data kurang dari limit, maka kembalikan ke halaman terakhir
      this.nextPage = Number(page) + Number(1);
      if (this.response.length < this.limit) {
        this.nextPage = page;
      }
      this.limit = limit;
    });
  }

  //fungsi untuk pencarian
  searchByName() {
    this.loading = true; //loading
    if (this.searchTerm.trim() !== '') {
      //hilangkan spasi di awal dan di akhir kata kunci pencarian
      console.log(this.searchTerm); //log kata kunci pencarian ke console
      this.loading = false; //matikan loading

      //filter hasil pencarian dari response sesuai kata kunci yang sudah dirubah ke huruf kecil
      this.searchResponse = this.response.filter((item) =>
        item.customer_name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  applyLimit() {
    // this.loading = true;
    if (isNaN(this.limitData) || this.limitData <= 0) {
      this.limit = 1;
    }
    this.limit = this.limitData;
    this.router.navigate(['/users/', this.page, this.limit]);
  }
}
