import { InjectionToken } from "@angular/core";
import { IClientService } from "./api-client/clients/iclients.service";

export const SERVICES_TOKEN = {
    HTTP: {
        CLIENTE: new InjectionToken<IClientService>('SERVICES_TOKEN.HTTP.CLIENT'),
        //SCHEDULE: new InjectionToken<IClienteService>('SERVICES_TOKEN.HTTP.SCHEDULE')
    }
}