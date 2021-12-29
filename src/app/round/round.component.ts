import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent {
  elecc: boolean;
  listElem: string[] =['Rock','Paper','Scissors'];
  form: FormGroup;
  constructor(private fb: FormBuilder){
    this.elecc = false;
    this.form = this.fb.group({
      tipo1: null,
      tipo2: null,
    });

  }

  onSubmit(){
    const select: any = {
      tipo1: this.form.get('tipo1')?.value,
      tipo2: this.form.get('tipo2')?.value,
    }
    console.log(select);
    console.log('holaaa');
  }

}
