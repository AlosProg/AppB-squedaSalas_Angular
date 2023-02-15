import { Component } from '@angular/core';
import { DatosMadridService } from './datos-madrid.service';

@Component({
  selector: 'app-datos-madrid',
  templateUrl: './datos-madrid.component.html',
  styleUrls: ['./datos-madrid.component.css'],
})
export class DatosMadridComponent {
  // Declaración de variables y propiedades
  codigopostal: string = '';
  public datos: any[] = [];
  public contador: number = 0;
  public localizaciones: any[] = [];
  display: any;
  public zoom = 9;

  // Localización del centro de Madrid
  position = {
    lat: 40.4169473,
    lng: -3.7035285,
  };
  label = {
    color: 'blue',
    text: 'CENTRO DE MADRID ',
  };

  constructor(private datosService: DatosMadridService) {} //se inyecta el servicio al componente

  // Función que es llamada al pulsar el botón "Buscar" el usuario
  obtenerDatos() {
    // Si el usuario no introduce ningún código y le dá al botón sale el mensaje de error...
    if (this.codigopostal == '') {
      alert('Introduzca un código postal');
    } else {
      // Si el usuario introduce algo nos suscribimos al método del servicio que tiene los datos de las salas de estudio
      this.datosService.obtenerSalasEstudio().subscribe((data: any) => {
        const datos2 = data['@graph']; //metemos el array de JSONs en una variable
        // Se inicializan variables
        this.contador = 0;
        this.datos = [];
        this.localizaciones = [];
        // recorremos el array de JSONS obtenidos del servicio
        for (var i = 0; i < datos2.length; i++) {
          // si el codigo postal introducido coincide con alguno se introducirá esta entrada en el array de resultados
          if (datos2[i].address['postal-code'] == this.codigopostal) {
            this.datos.push(datos2[i]);
          }
        }
        // si hay entradas en el array anterior se irán metiendo las localizacones en otro array para luego ser mostradas en el mapa
        if (this.datos.length > 0) {
          for (var i = 0; i < this.datos.length; i++) {
            this.contador += 1;
            this.localizaciones.push({
              lat: this.datos[i].location['latitude'],
              lng: this.datos[i].location['longitude'],
              label: this.datos[i].title,
            });
          }
        } else {
          // Si el código postal introducido no existe o no está en los datos se manda mensaje de alerta
          if (this.codigopostal != null) {
            alert(
              'El código postal que ha introducido no existe o no hay salas en este barrio'
            );
          }
        }
      });
    }
  }
}
