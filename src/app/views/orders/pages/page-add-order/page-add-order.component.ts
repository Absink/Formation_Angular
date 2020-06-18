import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  public title: string;
  public subtitle: string;

  constructor(
    private os: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.title = 'Orders';
    this.subtitle = 'Add an order';
  }

  public add(order: Order) {
    this.os.add(order).subscribe((datas) => {
      console.log(datas);
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }

}
