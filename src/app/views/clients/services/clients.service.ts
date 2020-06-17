import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection: Observable<Client[]>;
  private urlAPI = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlAPI}clients`);
   }


  get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  // Set collection
  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }
}
