import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

@Component({
  selector: 'app-form-add-order',
  templateUrl: './form-add-order.component.html',
  styleUrls: ['./form-add-order.component.scss']
})
export class FormAddOrderComponent implements OnInit {

  @Input() order = new Order();
  @Output() clicked: EventEmitter<Order> = new EventEmitter();

  public states = Object.values(StateOrder);
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      tjmHT: [this.order.tjmHT],
      nbJours: [this.order.nbJours],
      tva: [this.order.tva],
      state: [this.order.state],
      typePresta: [
        this.order.typePresta,
        //Validators.required
      ],
      client: [
        this.order.client,
        /*Validators.compose([
          Validators.required,
          Validators.minLength(2)
        ])*/
      ],
      comment: [this.order.comment],
      id: [this.order.id],
    })
  }

  public onSubmit() {
    this.clicked.emit(this.form.value);
  }

}
