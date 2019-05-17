import { Component, OnInit } from '@angular/core';
import { UserService } from './user-create.components';
import { Router } from '@angular/router';

@Component({
    selector: 'user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit {

    book: Object;

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    async ngOnInit() {
        this.users = [];
        await this.getUsers();
    }

    async createUser(book: Object) {
        const resp = await this.userService.addUser(user);
        if (resp) {
            this.router.navigate(['/users']);
        }
    }

}
