import {Component} from "angular2/core";
import {Pelicula} from ".././model/pelicula";
import {Router,RouteParams} from "angular2/router";
import {PeliculaService} from ".././services/peliculas.services";
import {OnInit} from "angular2/core";


@Component({
	selector:"registrar-pelicula",
	templateUrl:"app/view/registrar-pelicula.html",
	providers:[PeliculaService]
})

export class RegistrarPeliculaComponent implements OnInit{


		public tituloPelicula:string = "";
		public nuevaPelicula:Pelicula;


		constructor(private _peliculasServices:PeliculaService,
			private _router:Router,
			private _routeParams: RouteParams
			){

		}
		onCrearPelicula(titulo,director,anio){
			let pelicula:Pelicula= new Pelicula(77,titulo,director,anio);
			console.log(pelicula);
			this._peliculasServices.insertPelicula(this.pelicula);
			//para que vuelva a la pantalla de inicio
			this._router.navigate(["Peliculas"]);
		}


		//para el OnInit
		//el parametro pasado por la url es el titulo 
			ngOnInit():any{
				this.tituloPelicula=
				this._routeParams.get("titulo");
				this.nuevaPelicula = new Pelicula(
					0,
					this._routeParams.get("titulo"),
					this._routeParams.get("director"),
					this._routeParams.get("anio")
					);
			}

		//para el OnInit

		onSubmit(){
			this._peliculasServices.insertPelicula(this.nuevaPelicula);
			this._router.navigate(["Peliculas"]);
		}
}