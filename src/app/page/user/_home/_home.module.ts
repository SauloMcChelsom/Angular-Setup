import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AngularMaterialModule } from '../../../theme/angular-material.module';
import { LoadingModule } from '../../../component/loading/loading.module'
import { HomeComponent, DialogContentExampleDialog, PizzaPartyComponent, BottomSheetOverviewExampleSheet } from './_home.component'
import { HomeRoute } from './_home.route'

@NgModule({
  imports: [
    CommonModule, 
    HomeRoute, 
    AngularMaterialModule, 
    LoadingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent, 
    DialogContentExampleDialog, 
    PizzaPartyComponent,
    BottomSheetOverviewExampleSheet
  ],
  exports: [
    HomeComponent, 
    DialogContentExampleDialog, 
    PizzaPartyComponent
  ]
})
export class HomeModule {}