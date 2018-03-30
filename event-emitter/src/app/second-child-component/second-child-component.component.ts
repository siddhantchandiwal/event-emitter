import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-second-child-component',
  templateUrl: './second-child-component.component.html',
  styleUrls: ['./second-child-component.component.css']
})
export class SecondChildComponentComponent implements OnInit {
  @Input() value: string;
  outputValue: string;
  constructor() { }

  ngOnInit() {
  }

  renderName() {
    this.outputValue = this.value;
    alert("Value passed is - " + this.outputValue);
  }

}
