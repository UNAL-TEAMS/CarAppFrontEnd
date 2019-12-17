import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { Provider } from '../../interfaces/provider.interfaces';

@Component({
  selector: 'app-profile-provider',
  templateUrl: './profile-provider.component.html',
  styleUrls: ['./profile-provider.component.css']
})
export class ProfileProviderComponent implements OnInit {

  constructor(private providerService: ProviderService) { }

  provider: Provider = {name: '', NIT: 0, email: '',phone:0,avatar: '',
                        services: {
                          Rev5k: {
                            description: '',
                            has: false
                          },
                          RevTec: {
                            description: '',
                            has: false
                          },
                          Soat: {
                            description: '',
                            has: false
                          },
                        }};

  ngOnInit() {
  }


  handleFileInput(files: FileList) {
    const fileToUpload = files.item(0);
    this.providerService.uploadAvatar(fileToUpload, (response) => {
      //this.loadUser();
    }, (err) => {});
  }

  getAvatarUrl() {/*
    if (this.user.avatar) return environment.server_url + '/user/user_photo/' + this.user.avatar;
    // random img
    return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgS95mgs06I29L9EpCQ4ymPSE3daG_2AH1ejRNfuSbjBs9tbZ&s'*/
  }

}
