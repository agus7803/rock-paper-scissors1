import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
//import {UsuarioService} from "../service/usuario.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listUsuarios: string[] = [];
  accion = 'Agregar';
  form: FormGroup;

  constructor(private fb: FormBuilder,
  ){
    this.form = this.fb.group({
      name1: ['', Validators.required],
      name2: ['', Validators.required],
    });
  }


  guardarUsuario(){
    const usr: any = {
      name1: this.form.get('name1')?.value,
      name2: this.form.get('name2')?.value,
    }
    console.log(usr);
  }
}


