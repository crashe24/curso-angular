System.register(["angular2/core", "./component/peliculas-list.component", "./component/peliculas-footer.component", "./component/contacto.component", "./component/registrar-pelicula.component", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, peliculas_list_component_1, peliculas_footer_component_1, contacto_component_1, registrar_pelicula_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (peliculas_list_component_1_1) {
                peliculas_list_component_1 = peliculas_list_component_1_1;
            },
            function (peliculas_footer_component_1_1) {
                peliculas_footer_component_1 = peliculas_footer_component_1_1;
            },
            function (contacto_component_1_1) {
                contacto_component_1 = contacto_component_1_1;
            },
            function (registrar_pelicula_component_1_1) {
                registrar_pelicula_component_1 = registrar_pelicula_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.titulo = "Peliculas";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: "app/view/pelicula.html",
                        directives: [peliculas_list_component_1.PeliculasListComponent,
                            contacto_component_1.ContactoComponent, peliculas_footer_component_1.PeliculasFooter, router_1.ROUTER_DIRECTIVES,
                            registrar_pelicula_component_1.RegistrarPeliculaComponent]
                    }),
                    router_1.RouteConfig([{
                            path: "/peliculas",
                            name: "Peliculas",
                            component: peliculas_list_component_1.PeliculasListComponent,
                            useAsDefault: true },
                        {
                            path: "/contacto",
                            name: "Contacto",
                            component: contacto_component_1.ContactoComponent,
                            useAsDefault: false },
                        {
                            path: "/crearPelicula",
                            name: "CrearPelicula",
                            component: registrar_pelicula_component_1.RegistrarPeliculaComponent,
                            useAsDefault: false },
                        {
                            path: "/crearPelicula/:titulo/:director/:anio",
                            name: "CrearPeliculaBasadaEnOtra",
                            component: registrar_pelicula_component_1.RegistrarPeliculaComponent,
                            useAsDefault: false }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map