import { Component, OnChanges, OnInit } from '@angular/core';
import { Feature } from '../../interfaces/places';
import { PlacesService } from '../../services/places.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-searh-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent{


  public selectedId: string='';


  constructor(
    private placesService:PlacesService,
    private mapService: MapService
  ) {

   }

  ngOnInit(): void {
  }

  get isLoadingPlaces():boolean{
    return this.placesService.isLoadingPlaces;
  }

  get places(): Feature[]{
    return this.placesService.places;
  }

  flyTo (place:Feature){
    this.selectedId = place.id;
    const [lng , lat ] = place.center;
    this.mapService.flyTo([lng,lat]);
   }

   getDirections(place: Feature){
    if (!this.placesService.userLocation) throw Error (' No hay user location');
    const start = this.placesService.userLocation;
    const end = place.center as [number, number];
    this.placesService.deletePlaces();
    this.mapService.getRouteBetweenPoints(start,end);
   }


}
