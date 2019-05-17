import { Component, OnInit } from '@angular/core';
import { UserService } from './user-create.components';
import { Router } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  books: Array<Object>;

  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }

  async ngOnInit() {
    this.users = [];
    await this.getUsers();
  }

  async getUers() {
    this.books = await this.userService.getUsers();
  }

  goToCreate() {
    this.router.navigate(['user-create']);
  }

  async deleteUser(id: string) {
    const resp = await this.userService.deleteUser(id);
    if (resp) {
      this.userInfo = this.userInfo.filter((userInfo) => {
        return userInfo['id'] !== id;
      });
    }
  }

}
