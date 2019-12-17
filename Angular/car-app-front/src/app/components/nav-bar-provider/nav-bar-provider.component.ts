import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-provider',
  templateUrl: './nav-bar-provider.component.html'
})
export class NavBarProviderComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router ) { }

  ngOnInit() {
  }

  logOut() {
    this.userService.logOut();
    this.router.navigate(['/logInProvider']);
  }
}
