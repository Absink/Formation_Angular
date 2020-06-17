import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public collection: Client[];

  constructor(private cs: ClientsService) { }

  ngOnInit(): void {
    this.cs.collection.subscribe((datas) => {
      this.collection = datas;
      console.log(this.collection)
    })
  }

}
