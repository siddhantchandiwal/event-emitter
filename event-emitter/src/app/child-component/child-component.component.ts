import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  counter = 0;
  constructor() { }

  ngOnInit() {
  }

  valueChanged() {
    this.counter += 1;
    this.valueChange.emit(this.counter);
  }

}
