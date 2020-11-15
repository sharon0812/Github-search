import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NarvbarComponent } from './narvbar/narvbar.component';
import { SearchComponent } from './search/search.component';

import { ReposComponent } from './repos/repos.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    NarvbarComponent,
    SearchComponent,
    ReposComponent,
    SearchFormComponent,
    HighlightDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
