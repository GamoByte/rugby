import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import {  AuthenticationService } from '../../services';

@Component({ templateUrl: 'listusers.component.html' })
export class ListUsersComponent implements OnInit {
    users = null;

    constructor(private authService: AuthenticationService) {}

    ngOnInit() {
        this.authService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    deleteUser(id: number) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.authService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.users = this.users.filter(x => x.id !== id) 
            });
    }
}