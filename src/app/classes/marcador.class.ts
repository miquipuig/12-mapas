export class Marcador {
    
    //Les dues construccions son el mateix.
    // constructor(public lat: number, public lng: number){}


    public lat: number;
    public lng: number;
    public titulo: string = 'Sin Titulo';
    public desc: string = 'Sin Descriptción';


    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }

}