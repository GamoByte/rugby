import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/services';

@Component({ templateUrl: 'container.component.html' })
export class AccContainerComponent {
    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) {
        // redirect to home if already logged in
        if (this.authService.userValue) {
            this.router.navigate(['/']);
        }
    }
}