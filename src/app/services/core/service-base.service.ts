import { GenericResultCommand } from 'src/app/commands/core/generic-result.command';
import { Injectable, Injector, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Entity } from 'src/app/models/core/entity.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class ServiceBase<T extends Entity> {

  protected http: HttpClient;
  protected apiUrl: string

  constructor(
    @Inject(String) protected endpoint: string,
    protected injector: Injector
  ) {
    this.http = this.injector.get(HttpClient);
    this.apiUrl = `${environment.apiUrl}${endpoint}`;
  }

  getAll(): Promise<GenericResultCommand> {
    return this.http.get<GenericResultCommand | any>(`${this.apiUrl}`).toPromise();
  }

  getById(id: number): Promise<GenericResultCommand> {
    return this.http.get<GenericResultCommand | any>(`${this.apiUrl}/${id}`).toPromise();
  }

  post(resource: T): Promise<GenericResultCommand> {
    return this.http.post<GenericResultCommand | any>(this.apiUrl, resource).toPromise();
  }

  put(resource: T): Promise<GenericResultCommand> {
    if (resource.id)
      return this.http.put<GenericResultCommand | any>(`${this.apiUrl}v1/${resource.id}`, resource).toPromise();
    else
      return this.http.put<GenericResultCommand | any>(`${this.apiUrl}`, resource).toPromise();
  }

  delete(id: number): Promise<GenericResultCommand | any> {
    return this.http.delete<GenericResultCommand>(`${this.apiUrl}/${id}`).toPromise();
  }

}
