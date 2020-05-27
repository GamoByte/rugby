import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model';
import { AuthenticationService, UserService } from '../services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = false;
  user: User;
  userFromApi: User;

  name = 'Default name';
  Title = 'SupportWell';

  constructor(
    private userService: UserService,
    private authService: AuthenticationService
) {
    // this.user = this.authService.userValue;
}

ngOnInit() {
    this.loading = true;
    this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
        this.loading = false;
        this.userFromApi = user;
    });
}

}
