import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  public title: string;
  public subtitle: string;

  constructor(
    private cs: ClientsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.title = 'Clients';
    this.subtitle = 'Add a client';
  }

  public add(client: Client) {
    this.cs.add(client).subscribe((datas) => {
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }

}
