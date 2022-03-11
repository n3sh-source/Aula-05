import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ListaDetailsComponent } from './lista-details/lista-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'list', component: ListComponent },
      { path: 'list/:index', component: ListaDetailsComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    ListComponent,
    ListaDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
