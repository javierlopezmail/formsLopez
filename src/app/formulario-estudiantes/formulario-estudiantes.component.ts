import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'formulario-estudiantes',
  templateUrl: './formulario-estudiantes.component.html',
  styleUrls: ['./formulario-estudiantes.component.scss']
})
export class FormularioEstudiantesComponent {
  cursos: string[] = ['Angular', 'React', 'Node JS'];

  constructor(private fb: FormBuilder, private toastr: ToastrService) { }

  miFormulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    curso: ['', Validators.required], // Campo de cursos
    edad: ['', [Validators.required, Validators.min(18)]] // Campo de edad con validación
  });

  onSubmit() {
    console.log(this.miFormulario.value);
    
    this.toastr.success('Formulario enviado con éxito', '¡Éxito!')
    
    this.miFormulario.reset();
  }

  get f() { return this.miFormulario.controls; }
}