import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-striped',
  templateUrl: './table-striped.component.html',
  styleUrls: ['./table-striped.component.scss']
})
export class TableStripedComponent implements OnInit {

  @Input() headers: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
