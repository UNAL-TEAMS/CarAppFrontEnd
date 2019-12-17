import { NOTIFICATION_TYPE } from './../notify/notify.component';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { Router } from '@angular/router';
import { Provider, Service } from '../../interfaces/provider.interfaces';
import { environment } from '../../../environments/environment';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import "./profile-provider.component.css";

@Component({
  selector: 'app-profile-provider-service-modal',
  templateUrl: './edit-service.modal.html',
  styleUrls: ['./profile-provider.component.css']
})
export class ServiceModalComponent {
  @Input() description = '';
  @Input() serviceType;
  @Input() tittle;
  @Output() okEvent = new EventEmitter<any>();
  constructor(public activeModal: NgbActiveModal) {
  }

  onClick() {
    console.log('Here');
    this.okEvent.emit({description: this.description, serviceType: this.serviceType});
    this.activeModal.close();
  }
}

@Component({
  selector: 'app-profile-provider',
  templateUrl: './profile-provider.component.html',
  styleUrls: ['./profile-provider.component.css']
})
export class ProfileProviderComponent implements OnInit {

  provider: Provider = {
    name: '',
    phone: 0,
    email: '',
    NIT: 0,
    services: {
      Soat: {has: false, description: ''},
      RevTec: {has: false, description: ''},
      Rev5k: {has: false, description: ''},
    }
  };

  serviceTypes = NOTIFICATION_TYPE;

  constructor(private providerService: ProviderService,
              private router: Router,
              private modalService: NgbModal) {
    if (!providerService.isLogged()) router.navigate(['/logInProvider']);
    this.loadProvider();
  }

  private loadProvider() {
    this.providerService.getOwn((response) => {
      this.provider = JSON.parse(response);
    }, (err) => {});
  }

  ngOnInit() {}

  handleFileInput(files: FileList) {
    const fileToUpload = files.item(0);
    this.providerService.uploadAvatar(fileToUpload, (response) => {
      this.loadProvider();
    }, (err) => {});
  }

  getAvatarUrl() {
    if (this.provider.avatar) return environment.server_url + '/provider/provider_photo/' + this.provider.avatar;
    // random img
    return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgS95mgs06I29L9EpCQ4ymPSE3daG_2AH1ejRNfuSbjBs9tbZ&s';
  }

  editService(serviceType: string){
    let service: Service;
    let tittle = '';
    switch (serviceType) {
      case this.serviceTypes.SOAT: service = this.provider.services.Soat; tittle = 'SOAT';  break;
      case this.serviceTypes.TecnoMecanica: service = this.provider.services.RevTec;  tittle = 'Revisión Tecnomecanica'; break;
      case this.serviceTypes.Kilometer: service = this.provider.services.Rev5k;  tittle = 'Mantenimiento 5k'; break;
      default: return;
    }

    const okFunc = (response) => {
      this.loadProvider();
    }, errFunc = (error) => {};

    console.log(service);

    if (service.has) {
      const modal = this.modalService.open(ServiceModalComponent, { centered: true });
      modal.componentInstance.description = service.description;
      modal.componentInstance.serviceType = serviceType;
      modal.componentInstance.tittle = tittle;
      modal.componentInstance.okEvent.subscribe((res) => {
        switch (serviceType) {
          case this.serviceTypes.SOAT: service = this.provider.services.Soat.description = res.description; break;
          case this.serviceTypes.TecnoMecanica: service = this.provider.services.RevTec.description = res.description; break;
          case this.serviceTypes.Kilometer: service = this.provider.services.Rev5k.description = res.description; break;
          default: return;
        }
        this.providerService.modify({services: this.provider.services}, okFunc, errFunc);
      });
    }

    this.providerService.modify({services: this.provider.services}, okFunc, errFunc);
  }

}
