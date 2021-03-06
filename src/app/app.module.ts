import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }  from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComp } from './first-comp/first.component';
import { HighlightDirective } from './highlight.directive';
import { DumpService } from './first-comp/dump.service';
import { AppRoute } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    FirstComp,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoute)
  ],
  providers: [DumpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
