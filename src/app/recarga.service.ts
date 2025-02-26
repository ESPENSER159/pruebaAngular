import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecargaService {
  private recargas: any[] = [];

  constructor() {}

  agregarRecarga(recarga: any) {
    this.recargas.push(recarga);
  }

  obtenerRecargas() {
    return this.recargas;
  }
}