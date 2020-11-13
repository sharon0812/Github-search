import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NarvbarComponent } from './narvbar/narvbar.component';
import { SearchComponent } from './search/search.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ReposComponent } from './repos/repos.component';

@NgModule({
  declarations: [
    AppComponent,
    NarvbarComponent,
    SearchComponent,
    ProfileFormComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
