import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../../theme/angular-material.module';
import { LoadingModule } from '../../../component/loading/loading.module'
import { HomeComponent } from './_home.component'
import { HomeRoute } from './_home.route'

@NgModule({
  imports: [CommonModule, HomeRoute, AngularMaterialModule, LoadingModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}