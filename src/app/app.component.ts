import { Component } from '@angular/core';

import { AuthenticationService } from './services';
import { User, Role } from './model';

@Component({ 
    selector: 'app-root', 
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss'] })
export class AppComponent {
    user: User;

    constructor(private authService: AuthenticationService) {
        this.authService.user.subscribe(x => this.user = x);
    }

    isAdmin() {
        return this.user && this.user.role === Role.Admin;
    }

    logout() {
        this.authService.logout();
    }
}