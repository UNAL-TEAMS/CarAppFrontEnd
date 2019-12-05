import { Component, OnInit, ɵConsole } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  user: User = {name: '', identification: 0, email: ''};

  constructor(private userService: UserService,
              private router: Router) {
    if (!userService.isLogged()) this.router.navigate(['/logIn']);
    this.loadUser();
   }

  ngOnInit() {
  }

  private loadUser() {
    this.userService.getOwnUser((response) => {
      this.user = JSON.parse(response);
    }, (err) => {});
  }

  handleFileInput(files: FileList) {
    const fileToUpload = files.item(0);
    this.userService.uploadImg(fileToUpload, (response) => {
      this.loadUser();
    }, (err) => {});
  }

  getAvatarUrl() {
    if (this.user.avatar) return environment.server_url + '/user/user_photo/' + this.user.avatar;
    // random img
    return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgS95mgs06I29L9EpCQ4ymPSE3daG_2AH1ejRNfuSbjBs9tbZ&s'
  }

  

}
