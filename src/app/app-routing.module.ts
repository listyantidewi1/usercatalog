import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './component/users/users.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';

const routes: Routes = [
  // { path: 'users', component: UsersComponent },
  { path: 'users/:page/:limit', component: UsersComponent },
  { path: 'user/:id', component: UserdetailComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: 'users/:page/:limit' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
