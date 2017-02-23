import {Component} from "angular2/core";
import {PeliculasListComponent} from "./component/peliculas-list.component";
import {PeliculasFooter} from "./component/peliculas-footer.component";
import {ContactoComponent} from "./component/contacto.component";
import {RegistrarPeliculaComponent} from "./component/registrar-pelicula.component";


/*ROUTING BASICO*/
import {ROUTER_DIRECTIVES,RouteConfig,Router} from "angular2/router";



@Component ({
selector:"my-app",
templateUrl:"app/view/pelicula.html"
,directives: [PeliculasListComponent,
ContactoComponent,PeliculasFooter,ROUTER_DIRECTIVES,
RegistrarPeliculaComponent]
})
@RouteConfig([{
	path:"/peliculas", 
	name:"Peliculas", 
	component: PeliculasListComponent,
	useAsDefault: true},
	{
	path:"/contacto", 
	name:"Contacto", 
	component: ContactoComponent,
	useAsDefault: false},

	{
	path:"/crearPelicula", 
	name:"CrearPelicula", 
	component: RegistrarPeliculaComponent,
	useAsDefault: false},

		{
	path:"/crearPelicula/:titulo", 
	name:"CrearPeliculaBasadaEnOtra", 
	component: RegistrarPeliculaComponent,
	useAsDefault: false}
	])
export class AppComponent{
	public titulo:string = "Peliculas";


}