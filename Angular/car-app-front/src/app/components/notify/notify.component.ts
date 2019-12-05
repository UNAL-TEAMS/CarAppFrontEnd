import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) {
    if (!userService.isLogged()) this.router.navigate(['/logIn']);
  }

  ngOnInit() {
  }

}
