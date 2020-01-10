import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todo } from "../../interfaces/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() list: Array<todo>;
  @Output() deleteEvent = new EventEmitter();
  @Output() completeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDeleteItem(id) {
    this.deleteEvent.emit(id);
  }
  onCompleteItem(id) {
    this.completeEvent.emit(id);
  }
}
