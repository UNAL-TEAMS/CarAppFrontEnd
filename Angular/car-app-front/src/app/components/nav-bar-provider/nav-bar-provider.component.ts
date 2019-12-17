import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-nav-bar-provider',
  templateUrl: './nav-bar-provider.component.html'
})
export class NavBarProviderComponent implements OnInit {

  constructor(private providerService: ProviderService,
              private router: Router ) { }

  ngOnInit() {
  }

  logOut() {
    this.providerService.logOut();
    this.router.navigate(['/logInProvider']);
  }
}
