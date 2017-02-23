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
		


		constructor(private _peliculasServices:PeliculaService,
			private _router:Router,
			private _routeParams: RouteParams
			){

		}
		onCrearPelicula(titulo,director,anio){
			let pelicula:Pelicula= new Pelicula(77,titulo,director,anio);
			console.log(pelicula);
			this._peliculasServices.insertPelicula(pelicula);
			//para que vuelva a la pantalla de inicio
			this._router.navigate(["Peliculas"]);
		}


		//para el OnInit
		//el parametro pasado por la url es el titulo 
			ngOnInit():any{
				this.tituloPelicula=
				this._routeParams.get("titulo");
			}

		//para el OnInit
}