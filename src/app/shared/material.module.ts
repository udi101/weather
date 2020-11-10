import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [MatMenuModule, MatToolbarModule, MatInputModule, MatButtonModule, MatIconModule, MatTooltipModule, MatSelectModule]
})
export class MaterialModule { }
