import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';


import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [MaterialModule, LayoutComponent, HttpClientModule]
})
export class SharedModule { }
