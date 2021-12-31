import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Este es el endpoint de el listado de todos los empleados
  private baseURL = "http://localhost:8080/api/v1/empleados"

  constructor(private httpClient: HttpClient) { }

  //obtiene todos los empleados del api
  obtenerListaEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`)
  }

  //Metodo para registrar empleado
  registrarEmpleado(empleado: Empleado): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, empleado);
  }

  eliminarEmpleado(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  obtenerEmpleadoPorID(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`)
  }

  actualizarEmpleado(id: number , empleado:Empleado) {
    return this.httpClient.put(`${this.baseURL}/${id}`, empleado)
  }

}
