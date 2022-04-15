// import { User } from './User';
// import { Company} from "./Company";

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export class CustomMap {
    public googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
           zoom: 1,
           center: {
               lat: 0,
               lng: 0
           }
        });
    }

    addMaker(mappalbe: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappalbe.location.lat,
                lng: mappalbe.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InforWindow({
              content: mappalbe.markerContent(),
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}