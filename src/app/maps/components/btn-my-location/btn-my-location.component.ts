import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component } from '@angular/core';
import { MapService , PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor(
    private mapService: MapService,
    private placesService:PlacesService
  ) { }

  goToMyLocation(){
    if (!this.placesService.isUserLocationReady) throw ('No hay ubicación de usuario');
    if (!this.mapService.isMapReady) throw ('No hay mapa disponible');
    this.mapService.flyTo(this.placesService.userLocation!);
  }



}
