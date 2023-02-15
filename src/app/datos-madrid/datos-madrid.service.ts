import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Se crea el servicio para poder consumir la API del gobierno
@Injectable({
  providedIn: 'root',
})
export class DatosMadridService {
  constructor(private httpClient: HttpClient) {} //creamos un cliente http mediante una instancia en el constructor

  // Método al que luego se llamará para obtener los datos de la página PHP
  obtenerSalasEstudio() {
    return this.httpClient.get('https://localhost/red.php'); // se obtendrán los datos de la página php con método get
  }
}
