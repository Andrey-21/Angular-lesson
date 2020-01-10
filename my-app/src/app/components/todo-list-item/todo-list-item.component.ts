import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todo } from "../../interfaces/todo";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {
  @Input() item: todo;
  @Output() deleteEvent = new EventEmitter();
  @Output() completeEvent = new  EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteItem() {
    this.deleteEvent.emit(this.item.id);
  }

  completeItem() {
    this.completeEvent.emit(this.item.id)
  }
}
