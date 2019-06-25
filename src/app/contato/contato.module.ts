import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ContatoComponent} from './contato.component';

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'contato', component: ContatoComponent}
    ])
  ]
})
export class ContatoModule { }
