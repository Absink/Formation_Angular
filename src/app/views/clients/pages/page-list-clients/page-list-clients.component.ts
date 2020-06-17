import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // 1. Creation Observable
    const datas = new Observable(obs => {
      obs.next('M2i');      // 'next' envoie une valeur;
      obs.next('Airbus');
      obs.complete();       // 'complete' signale la fin
    });

    // 2. Souscription
    datas.subscribe({
      next: value => console.log(value),
      complete: () => console.log('End')
    })

    // 3. Demo avec F12 !

    // 4. Effacer le code
  }

}
