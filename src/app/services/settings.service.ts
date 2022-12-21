import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  headers = new HttpHeaders({
    'access-control-allow-origin': '*',
    'Content-Type': 'application/json',
    'app': environment.app
  });
  constructor( private http: HttpClient ) { }


  getSettings(){
    return this.http.get(`${environment.apiUrl}/settings`, { headers: this.headers })
  }

}
