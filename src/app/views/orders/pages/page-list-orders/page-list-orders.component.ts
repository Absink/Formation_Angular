import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public collection: Order[];

  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.os.collection.subscribe((datas) => {
      this.collection = datas;
      console.log(this.collection)
    })
    // console.log(this.collection)
  }

}
