import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order.model';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public collection$: Observable<Order[]>
  public headers: string[];
  public states = Object.values(StateOrder)
  public btnRoute: BtnI;
  public btnHref: BtnI;
  public btnAction: BtnI;

  constructor(private os: OrdersService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.collection$ = this.os.collection;
    this.headers = ['Type', 'Client', 'Nb. Jours', 'TJM HT', 'Total HT', 'Total TTC', 'Etat'];
    this.btnRoute = { label: 'Add an order', route: 'add' };
    this.btnHref = { label: 'Go to Google', href: 'http://www.google.fr' };
    this.btnAction = { label: 'Open Popup', action: true };
  }

  public changeState(order: Order, event) {
    this.os.changeState(order, event.target.value).subscribe((data) => {
      order.state = data.state
    })
  }

  public openPopup() {
    console.log('Popup')
  }

}
