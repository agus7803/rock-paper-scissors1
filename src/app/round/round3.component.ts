import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-player3',
  templateUrl: './round3.component.html',
  styleUrls: ['./round.component.css']
})
export class Round3Component {
  elecc: boolean;
  listElem: string[] =["Rock","Paper","Scissors"];
  form: FormGroup;
  constructor(private fb: FormBuilder,
  ){
    this.elecc = false;
    this.form = this.fb.group({
      tipo5: null,
      tipo6:null,
    })
  }

  guardarEleccion(){
    const eleccion: any ={
      tipo5: this.form.get('tipo5')?.value,
      tipo6: this.form.get('tipo6')?.value,
    }
    console.log(eleccion);
  }

}
