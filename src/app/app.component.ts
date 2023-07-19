import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservasService } from './services/reservas/reservas.service';
import { RolesService } from './services/roles/roles.service';
import { UsuariosService } from './services/usuarios/usuarios.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  usuariosForm?: FormGroup;
  //title: 'Arriba las manos' | undefined;

  constructor(
    public fb: FormBuilder,
    public reservasService: ReservasService,
    public rolesService: RolesService,
    public usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.usuariosForm = this.fb.group({
      nombre: [' ', Validators.required],
      apellido: [' ', Validators.required],
      tipo_documento: [' ', Validators.required],
      num_documento: [' ', Validators.required],
      email: [' ', Validators.required],
      contraseña: [' ', Validators.required],
      id_rol: [' ', Validators.required],
    });
  }

  guardar(): void {}
}
