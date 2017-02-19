import {Injectable} from "angular2/core";
import {PELICULAS} from "./mock.peliculas";


@Injectable()
export class PeliculaService{
	getPelicula(){
		return "Prueba Servicio";
	}

	getObtenerListadoPeliculas(){
		return PELICULAS;
	}
}

