import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {


  empleado: Empleado = new Empleado;
  constructor(private EmpleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.empleado)
  }

  guardarEmpleado() {
    this.EmpleadoService.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      this.irListaEmpleados();
    }, error => console.log(error));
  }

  irListaEmpleados() {
    this.router.navigate(['/empleados'])
  }

  onSubmit() {
    this.guardarEmpleado()
  }

}
