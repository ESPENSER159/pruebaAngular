import { Component } from '@angular/core';
import { RecargaService } from '../recarga.service';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.css']
})
export class RecargaComponent {
  operador: string | undefined;
  valor: string | undefined;
  persona: string | undefined;
  recargas: any[] = [];

  constructor(private recargaService: RecargaService) {}

  venderRecarga() {
    const nuevaRecarga = {
      operador: this.operador,
      valor: this.valor,
      persona: this.persona
    };

    this.recargaService.agregarRecarga(nuevaRecarga);
    this.recargas = this.recargaService.obtenerRecargas();

    // Limpiar campos del formulario
    this.operador = '';
    this.valor = '';
    this.persona = '';
  }
}