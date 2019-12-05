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

  user: User = {name: ''};

  constructor(private userService: UserService,
              private router: Router) {
    if (!userService.isLogged()) this.router.navigate(['/logIn']);
    this.userService.getOwnUser((response) => {
      this.user = response;
      console.log(this.user);
    }, (err) => {});
   }

  ngOnInit() {
  }

  fileToUpload: File = null;
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

  }

  getAvatarUrl() {
    if (this.user.avatar) return environment.server_url + '/user/user_photo/' + this.user.avatar;
    // random img
    return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgS95mgs06I29L9EpCQ4ymPSE3daG_2AH1ejRNfuSbjBs9tbZ&s'
  }

}
