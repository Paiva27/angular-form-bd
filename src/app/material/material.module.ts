import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule,
    Material.MatCardModule,
    Material.MatDialogModule,
    Material.MatTableModule,
    Material.MatMenuModule,
    Material.MatIconModule,
    Material.MatProgressSpinnerModule,
    Material.MatTabsModule,

  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule,
    Material.MatCardModule,
    Material.MatDialogModule,
    Material.MatTableModule,
    Material.MatMenuModule,
    Material.MatIconModule,
    Material.MatProgressSpinnerModule,
    Material.MatTabsModule,

  ]
})
export class MaterialModule { }
