import { Component, Inject, OnDestroy } from '@angular/core';
import { SERVICES_TOKEN } from '../../services/service.token';
import { IClientService } from '../../services/api-client/clients/iclients.service';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { ClientFormComponent } from "../components/client-form/client-form.component";
import { ClientModelForm } from '../client.models';


@Component({
  selector: 'app-new-client',
  imports: [ClientFormComponent],
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.scss',
  providers: [
  {provide: SERVICES_TOKEN.HTTP.CLIENTE, useClass: ClientsService}
  ]
})
export class NewClientComponent implements OnDestroy{
 
  constructor(@Inject (SERVICES_TOKEN.HTTP.CLIENTE)private readonly httpService: IClientService){}

  ngOnDestroy() : void{
    
  }

  onSubmitClient(value: ClientModelForm){
    
  }

}

