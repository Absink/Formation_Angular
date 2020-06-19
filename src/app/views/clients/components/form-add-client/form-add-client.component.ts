import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-form-add-client',
  templateUrl: './form-add-client.component.html',
  styleUrls: ['./form-add-client.component.scss']
})
export class FormAddClientComponent implements OnInit {

  @Input() client = new Client();
  @Output() clicked: EventEmitter<Client> = new EventEmitter();

  public states = Object.values(StateClient);
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.client.name],
      ca: [this.client.ca,
        Validators.required
      ],
      tva: [this.client.tva],
      state: [this.client.state],
      comment: [this.client.comment],
      id: [this.client.id],
    })
  }

  public onSubmit() {
    this.clicked.emit(this.form.value);
  }

}
