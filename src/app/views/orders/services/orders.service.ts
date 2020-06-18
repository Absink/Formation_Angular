import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order.model';
import { environment } from 'src/environments/environment';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

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

  // Add
  public add(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlAPI}orders`, order);
  }

  // Update
  public update(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlAPI}orders/${order.id}`, order);
  }

  // ChangeState
  public changeState(order: Order, state: StateOrder): Observable<Order> {
    const obj = new Order({...order});
    obj.state = state;
    return this.update(obj);
  }

}
