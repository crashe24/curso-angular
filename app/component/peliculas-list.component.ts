import {Component} from "angular2/core";
import {Pelicula} from ".././model/pelicula";
import {PeliculaService} from ".././services/peliculas.services";

@Component({
	selector:"peliculas-list",
	templateUrl:"app/view/peliculas-list.html",
	providers:[PeliculaService]
	})


export class PeliculasListComponent{

	public pelicula:Pelicula;
	public peliculas:array<Pelicula>;
	public mostrarDatos:boolean;
	public peliculaElegida:Pelicula;
	public mostrarServicio:string;

	constructor(private _peliculaServices : PeliculaService){
     this.mostrarDatos = false;
     this.mostrarServicio = _peliculaServices.getPelicula();
     //this.pelicula= new Pelicula(0,"Batan","Director",2012);
     /*
     this.peliculas = [new Pelicula(1,"Batan","Director",2010),
     					new Pelicula(2,"Batan 2","Director",2014),
     					new Pelicula(3,"Batan 3","Director",2016),
     					new Pelicula(4,"Batan 3","Director",null)];
	*/

	 this.peliculas = this._peliculaServices.getObtenerListadoPeliculas();
     this.pelicula = this.peliculas[0];
     this.peliculaElegida = this.peliculas[0]; 
	 
	}
		/*
		debug(){
		alert("Pelicula : ");
	}*/


	onShowData(){
		this.mostrarDatos = true;
	}



	onHideData(){
		this.mostrarDatos = false;
	}
	 
	 onShowHideData(value){
		this.mostrarDatos = value;
	}

	 onChangePeliculaFavorita(pelicula:Pelicula){
	 	this.pelicula = pelicula;
	 	this.peliculaElegida = pelicula;
	 }
	

}