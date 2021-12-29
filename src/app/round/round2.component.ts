import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-player2',
  templateUrl: './round2.component.html',
  styleUrls: ['./round.component.css']
})
export class Round2Component {
  elecc: boolean;
  listElem: string[] =["Rock","Paper","Scissors"];
  form: FormGroup;
  constructor(private fb: FormBuilder,
  ){
    this.elecc = false;
    this.form = this.fb.group({
      tipo3: null,
      tipo4:null,
    })
  }

  guardarEleccion(){
    const eleccion: any ={
      tipo3: this.form.get('tipo3')?.value,
      tipo4: this.form.get('tipo4')?.value,
    }
    console.log(eleccion);
  }

}

