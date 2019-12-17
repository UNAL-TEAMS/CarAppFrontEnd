import { NOTIFICATION_TYPE } from './../notify/notify.component';
import { Component, OnInit } from '@angular/core';
import { Provider } from '../../interfaces/provider.interfaces';
import { ProviderService } from '../../services/provider.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  providersSoat: Provider[] = [];
  providersTecno: Provider[] = [];
  providers5k: Provider[] = [];

  constructor(private providerService: ProviderService) {
    this.initProviders();
  }

  ngOnInit() {
  }

  private initProviders() {
    this.providersSoat = [];
    this.providerService.getProvidersByService(NOTIFICATION_TYPE.SOAT, (response) => {
      this.providersSoat = JSON.parse(response);
    }, err => {});

    this.providers5k = [];
    this.providerService.getProvidersByService(NOTIFICATION_TYPE.Kilometer, (response) => {
      this.providers5k = JSON.parse(response);
    }, err => {});

    this.providersTecno = [];
    this.providerService.getProvidersByService(NOTIFICATION_TYPE.TecnoMecanica, (response) => {
      this.providerService = JSON.parse(response);
    }, err => {});
  }

  getAvatarUrl(provider: Provider) {
    if (provider.avatar) return environment.server_url + '/provider/provider_photo/' + provider.avatar;
    // random img
    return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgS95mgs06I29L9EpCQ4ymPSE3daG_2AH1ejRNfuSbjBs9tbZ&s';
  }
}
