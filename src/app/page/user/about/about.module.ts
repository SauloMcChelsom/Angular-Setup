import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../../theme/angular-material.module';
import { LoadingModule } from '../../../component/loading/loading.module'
import { AboutComponent } from './about.component'
import { AboutRoute } from './about.route'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule, 
    AboutRoute, 
    AngularMaterialModule, 
    LoadingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AboutComponent],
  exports: []
})
export class AboutModule {}