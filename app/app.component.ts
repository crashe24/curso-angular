import {Component} from "angular2/core";
import {PeliculasListComponent} from "./component/peliculas-list.component";
import {PeliculasFooter} from "./component/peliculas-footer.component";

@Component ({
selector:"my-app",
templateUrl:"app/view/pelicula.html"
,directives: [PeliculasListComponent,PeliculasFooter]
})

export class AppComponent{
	public titulo:string = "Peliculas";


}