import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pCollection: Observable<Order[]>;
  private urlAPI = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlAPI}orders`);
   }


  // Get collection
  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  // Set collection
  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }

}
