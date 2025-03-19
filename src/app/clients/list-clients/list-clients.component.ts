import { Component, Inject } from '@angular/core';
import { IClientService } from '../../services/api-client/clients/iclients.service';
import { SERVICES_TOKEN } from '../../services/service.token';
import { ClientsService } from '../../services/api-client/clients/clients.service';

@Component({
  selector: 'app-list-clients',
  imports: [],
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.scss',
  providers: [
    {provide: SERVICES_TOKEN.HTTP.CLIENTE, useClass: ClientsService}
    ]
})
export class ListClientsComponent {

  constructor(@Inject (SERVICES_TOKEN.HTTP.CLIENTE)private readonly httpService: IClientService){}

}
