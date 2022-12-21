import { Injectable, Injector } from '@angular/core';
import { GenericResultCommand } from '../commands/core/generic-result.command';
import { ServiceBase } from './core/service-base.service';

@Injectable({
  providedIn: 'root'
})
export class LeadsService extends ServiceBase<any> {
  constructor(protected override injector: Injector) {
    super('', injector);
  }

  postLeads(lead: any): Promise<GenericResultCommand | any> {
    return this.http.post<GenericResultCommand>(`${this.apiUrl}/leads`, lead).toPromise()
  }
}
