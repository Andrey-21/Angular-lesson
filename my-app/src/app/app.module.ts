import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FioComponentComponent } from './component/fio-component/fio-component.component';
import { EducationComponent } from './component/education/education.component';
import { JobExpereanceComponent } from './component/job-expereance/job-expereance.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { EmptyMsgComponent } from './components/empty-msg/empty-msg.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FormsModule } from "@angular/forms";
import { FilterListComponent } from './components/filter-list/filter-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FioComponentComponent,
    EducationComponent,
    JobExpereanceComponent,
    TodoListComponent,
    TodoListItemComponent,
    EmptyMsgComponent,
    TodoFormComponent,
    FilterListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
