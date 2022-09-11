import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule, MatInputModule, MatDialogModule,
    MatTableModule, MatButtonModule, MatSelectModule, MatProgressSpinnerModule,MatToolbarModule,MatChipsModule,MatIconModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule, MatDialogModule, 
    MatTableModule, MatButtonModule, MatSelectModule, MatProgressSpinnerModule,MatToolbarModule, MatChipsModule, MatIconModule
  ]
})
export class MaterialsModule { }
