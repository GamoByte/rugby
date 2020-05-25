import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from 'src/app/services';

@Component({ templateUrl: 'layout.component.html' })
export class AccContainerComponent {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {
        // redirect to home if already logged in
        if (this.accountService.userValue) {
            this.router.navigate(['/']);
        }
    }
}