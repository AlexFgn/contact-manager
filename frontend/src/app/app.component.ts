import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ContactListComponent } from './components/contact-list/contact-list.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    ContactListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  // Usamos ViewChild para obtener una referencia al componente ContactListComponent desde el HTML
  @ViewChild(ContactListComponent) listCmp!: ContactListComponent;
  
//   // Metodo que se puede llamar cuanto se crea un contacto
//   // recarga la lista de contactos para mostrar el nuevo
//   onCreated(){
//     this.listCmp.load();
//   }

//   // Metodo que se puede llamar cuando se actualiza un contacto existente
//   //Tambien recarga la lista para reflejar los cambios
//   onUpdated(){
//     this.listCmp.load();
//   }
}

