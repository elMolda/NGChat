import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  historial: string[] = [];
  mensaje = {destino: '', cuerpo: ''};
  procesarMensaje() {
    console.log('Prueba');
    console.log('Destinatario: ' + this.mensaje.destino + ' Mensaje: ' + this.mensaje.cuerpo);
    this.historial.push('Destinatario: ' + this.mensaje.destino + ' Mensaje: ' + this.mensaje.cuerpo);
  }

  constructor() { }

  ngOnInit() {
  }

}
