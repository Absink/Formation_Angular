import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

  @Input() collection: Order[]
  @Input() headers: string[];

  constructor() { }

  ngOnInit(): void {
    console.log('tes', this.collection)
  }

}
