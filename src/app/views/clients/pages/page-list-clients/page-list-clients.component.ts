import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/client.model';
import { BtnI } from 'src/app/shared/interfaces/btn-i';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public collection: Client[];
  public headers: string[];
  public btnRoute: BtnI;
  public btnHref: BtnI;

  constructor(private cs: ClientsService) { }

  ngOnInit(): void {
    this.cs.collection.subscribe((datas) => {
      this.collection = datas;
    })
    this.headers = ['Nom', 'Total TTC', 'Commentaire', 'Etat'];
    this.btnRoute = { label: 'Add a client', route: 'add' };
    this.btnHref = { label: 'Go to Angular', href: 'https://angular.io/' };
  }
}
