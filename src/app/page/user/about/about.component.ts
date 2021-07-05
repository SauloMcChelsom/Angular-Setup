import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, Directive, ViewChild } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'about-user',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {


  constructor() {}

  public formulario: FormGroup = new FormGroup({
    matricula: new FormControl(null,Validators.required),
    endereco: new FormControl(null,Validators.required),
  });

  public consulta(){
    
  }

}