import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleado[];

  constructor(private EmpleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  actualizarEmpleado(id: number) {
    this.router.navigate(['actualizar-empleado', id]);
  }

  eliminarEmpleado(id: number) {
    this.EmpleadoService.eliminarEmpleado(id).subscribe(dato => {
      this.obtenerEmpleados();
    })
  }

  verDetalles(id:number){
    this.router.navigate(['empleado-detalles' , id])
  }

  private obtenerEmpleados() {
    this.EmpleadoService.obtenerListaEmpleados().subscribe(dato => {
      this.empleados = dato;
    })
  }

}
