import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
  @Output() todoEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  filter(option) {
    this.todoEvent.emit(option)
  }
}
