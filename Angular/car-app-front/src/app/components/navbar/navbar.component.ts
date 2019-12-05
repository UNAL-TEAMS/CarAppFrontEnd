import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(private userService: UserService,
             private router: Router ) {
}
  logOut() {
    this.userService.logOut();
    this.router.navigate(['/logIn']);
  }

}

