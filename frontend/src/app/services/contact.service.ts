// El HttpClient permite hacer peticiones HTTP a un servidor backend
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// observable permite trabajar con datos asincronicos, como las respuestas HTTP que llegan en el futuro
import { Observable } from 'rxjs';

//Definimos la estructura que debe tener un contacto en nuestra app
export interface Contact{
  id:number;//Identificador unico del contacto
  name: string; //Nombre del contacto
  email: string; // Correo electronico
  phone: string; //Telefono de contacto
}

// Decorador que indica que este servicio se provee a toda la aplicacion
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //URL base de API donde se gestionan los contactos
  private API = 'http://localhost:3001/contacts';

  // inyectamos un HttpClient para poder hacer peticiones HTTP
  constructor(private http: HttpClient) {}

  // metodo para obtener la lista completa de contactos desde el servidor
  // Devuelve un observable que emitira un array de contactos cuando la peticion termines
  getAll(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.API);
  }

  // metodo para crear un nuevo contacto con el servidor
  // recibe un contacto completo con su id
  // devuelve un observable que emitira el contacto creado con su id asignado
  create(contact: Omit<Contact, 'id'>): Observable<Contact>{
    return this.http.post<Contact>(this.API, contact);
  }

  // metodo actualizar un contacto existente
  // recibe un contacto completo por su id
  // devuelve un observable que emitira el contacto actualizado
  update(contact: Contact): Observable<Contact>{

    // hacemos una peticion PU a la URL con el id del contacto para actualizarlo
    return this.http.put<Contact>(
      `${this.API}/${contact.id}`,  //URL con id del contacto
      contact  //datos para actualizar
    );
  }

  // metodo para eliminar un contacto por su id
  // devuelve un observable vacio (void) porque no esperamos datos en su respuesta
  delete(id: number): Observable<void>{

    // peticion DELETE a la url con el id del contacto
    return this.http.delete<void>(`${this.API}/${id}`);
  }

}
