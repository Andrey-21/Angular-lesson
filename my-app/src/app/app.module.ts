import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FioComponentComponent } from './component/fio-component/fio-component.component';
import { EducationComponent } from './component/education/education.component';
import { JobExpereanceComponent } from './component/job-expereance/job-expereance.component';

@NgModule({
  declarations: [
    AppComponent,
    FioComponentComponent,
    EducationComponent,
    JobExpereanceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
