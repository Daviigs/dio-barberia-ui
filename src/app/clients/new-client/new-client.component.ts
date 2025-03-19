import { Component, Inject } from '@angular/core';
import { SERVICES_TOKEN } from '../../services/service.token';
import { IClientService } from '../../services/api-client/clients/iclients.service';
import { ClientsService } from '../../services/api-client/clients/clients.service';

@Component({
  selector: 'app-new-client',
  imports: [],
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.scss',
  providers: [
  {provide: SERVICES_TOKEN.HTTP.CLIENTE, useClass: ClientsService}
  ]
})
export class NewClientComponent {

  constructor(@Inject (SERVICES_TOKEN.HTTP.CLIENTE)private readonly httpService: IClientService){}

}
