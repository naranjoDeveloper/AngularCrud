import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  id:number;
  empleado:Empleado = new Empleado();
  constructor(private EmpleadoService:EmpleadoService , private router:Router , private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.EmpleadoService.obtenerEmpleadoPorID(this.id).subscribe(dato=>{
      this.empleado = dato;
    }, error =>console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['empleados']);
  }

  onSubmit(){
    this.EmpleadoService.actualizarEmpleado(this.id,this.empleado).subscribe(dato=>{
      this.irAlaListaDeEmpleados();
    }, error => console.log(error))
  }

}
