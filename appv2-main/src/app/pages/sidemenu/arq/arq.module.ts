import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArqPageRoutingModule } from './arq-routing.module';

import { ArqPage } from './arq.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArqPageRoutingModule,
    SharedModule
  ],
  declarations: [ArqPage]
})
export class ArqPageModule {}
