System.register([".././model/pelicula"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pelicula_1;
    var PELICULAS;
    return {
        setters:[
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            exports_1("PELICULAS", PELICULAS = [new pelicula_1.Pelicula(1, "Batan", "Director", 2010),
                new pelicula_1.Pelicula(2, "Batan 2", "Director", 2014),
                new pelicula_1.Pelicula(3, "Batan 3", "Director", 2016),
                new pelicula_1.Pelicula(4, "Batan 3", "Director", null),
                new pelicula_1.Pelicula(5, "Batan 5", "Director", null)]);
        }
    }
});
//# sourceMappingURL=mock.peliculas.js.map