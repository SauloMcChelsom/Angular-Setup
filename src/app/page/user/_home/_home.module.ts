import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AngularMaterialModule } from '../../../theme/angular-material.module';
import { HomeComponent } from './_home.component'
import { HomeRoute } from './_home.route'

@NgModule({
  imports: [
    CommonModule, 
    HomeRoute, 
    AngularMaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule {}