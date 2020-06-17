import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pCollection: Observable<Order[]>;
  private urlAPI = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlAPI}orders`).pipe(
      map((datas) => {
        console.log(datas)
        return datas.map((obj) => {
          return new Order(obj);
        })
      })
    );
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
