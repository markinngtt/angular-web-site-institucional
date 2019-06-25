import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { NossaVisaoComponent } from './nossa-visao/nossa-visao.component';
import { ContatoComponent } from './contato/contato.component';
import {RouterModule} from '@angular/router';
import {ContatoModule} from './contato/contato.module';

@NgModule({
  declarations: [
    AppComponent,
    QuemSomosComponent,
    NossaVisaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ContatoModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
