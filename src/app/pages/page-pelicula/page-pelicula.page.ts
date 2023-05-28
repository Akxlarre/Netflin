import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-pelicula',
  templateUrl: './page-pelicula.page.html',
  styleUrls: ['./page-pelicula.page.scss'],
})
export class PagePeliculaPage implements OnInit {

  peliculas: any = [ { "titulo": "Ciudadano Kane", "descripcion": "Un periodista investiga la vida de un magnate de los medios de comunicación después de su muerte.", "duracion_minutos": 119, "calificacion": 8.3, "poster": "https://imgur.com/ebJsfVg.png" }, { "titulo": "El Padrino", "descripcion": "La historia de la familia Corleone y su participación en el crimen organizado en Nueva York.", "duracion_minutos": 175, "calificacion": 9.2, "poster": "https://imgur.com/L3rWFXC.png" }, { "titulo": "Casablanca", "descripcion": "Un clásico del cine negro en el que un hombre debe elegir entre el amor y la resistencia en la Segunda Guerra Mundial.", "duracion_minutos": 102, "calificacion": 8.5, "poster": "https://imgur.com/ssM1WJj.png" }, { "titulo": "El Señor de los Anillos: El Retorno del Rey", "descripcion": "La conclusión de la trilogía épica basada en las novelas de J.R.R. Tolkien, donde se decide el destino de la Tierra Media.", "duracion_minutos": 201, "calificacion": 8.9, "poster": "https://imgur.com/TJktR08.png" }, { "titulo": "Pulp Fiction", "descripcion": "Una serie de historias interconectadas sobre criminales, gánsteres y personajes peculiares en Los Ángeles.", "duracion_minutos": 154, "calificacion": 8.9, "poster": "https://imgur.com/9WRxROX.png" }, { "titulo": "Star Wars: Una nueva esperanza", "descripcion": "La primera película de la saga, donde se presenta la lucha entre el bien y el mal en una galaxia muy lejana.", "duracion_minutos": 121, "calificacion": 8.6, "poster": "https://imgur.com/BC3OEM5.png" }, { "titulo": "Star Wars: El Imperio contraataca", "descripcion": "La continuación de la historia, donde los rebeldes se enfrentan a las fuerzas del Imperio.", "duracion_minutos": 124, "calificacion": 8.7, "poster": "https://imgur.com/fIjP8Zw.png" }, { "titulo": "Star Wars: El retorno del Jedi", "descripcion": "La conclusión de la trilogía original, con el enfrentamiento final entre Luke Skywalker y Darth Vader.", "duracion_minutos": 131, "calificacion": 8.3, "poster": "https://imgur.com/sHzWwVx.png" }, { "titulo": "Star Wars: El despertar de la fuerza", "descripcion": "El inicio de una nueva trilogía, donde los héroes luchan contra la Primera Orden mientras buscan la ayuda de Luke Skywalker.", "duracion_minutos": 152, "calificacion": 7.0, "poster": "https://imgur.com/AKT1RGP.png" }, { "titulo": "Star Wars: El ascenso de Skywalker", "descripcion": "La conclusión de la saga Skywalker, con la batalla final entre la Resistencia y la Primera Orden.", "duracion_minutos": 142, "calificacion": 6.5, "poster": "https://imgur.com/8qaCza2.png" }, { "titulo": "Star Wars: Episodio I - La amenaza fantasma", "descripcion": "La República Galáctica está amenazada por la Federación de Comercio y el joven Anakin Skywalker se convierte en el aprendiz de Obi-Wan Kenobi.", "duracion_minutos": 136, "calificacion": 6.5, "poster": "https://imgur.com/L5C9EDF.png" }, { "titulo": "Star Wars: Episodio II - El ataque de los clones", "descripcion": "La galaxia se encuentra al borde de la guerra y Anakin Skywalker debe proteger a la senadora Padmé Amidala mientras enfrenta sus propios conflictos internos.", "duracion_minutos": 142, "calificacion": 6.6, "poster": "https://imgur.com/Qe5jzUB.png" }, { "titulo": "Star Wars: Episodio III - La venganza de los Sith", "descripcion": "La República se desmorona mientras el Canciller Palpatine se revela como el Lord Sith Darth Sidious y Anakin Skywalker se convierte en Darth Vader.", "duracion_minutos": 140, "calificacion": 7.5, "poster": "https://imgur.com/vBk5xlW.png" }, { "titulo": "Harry Potter y la piedra filosofal", "descripcion": "Un joven mago descubre su destino en el Colegio Hogwarts de Magia y Hechicería.", "duracion_minutos": 152, "calificacion": 7.6, "poster": "https://imgur.com/NsBJ5Wa.png" }, { "titulo": "Harry Potter y la cámara secreta", "descripcion": "Harry Potter regresa a Hogwarts para enfrentarse a una serie de misteriosos ataques.", "duracion_minutos": 161, "calificacion": 7.4, "poster": "https://imgur.com/MORge6h.png" }, { "titulo": "Harry Potter y el prisionero de Azkaban", "descripcion": "Harry Potter se enfrenta a un peligroso fugitivo mientras descubre la verdad sobre su pasado.", "duracion_minutos": 142, "calificacion": 7.9, "poster": "https://imgur.com/l5kjOHL.png" }, { "titulo": "Harry Potter y el cáliz de fuego", "descripcion": "Harry Potter participa en el Torneo de los Tres Magos mientras se prepara para una gran amenaza.", "duracion_minutos": 157, "calificacion": 7.7, "poster": "https://imgur.com/GwDfyma.png" }, { "titulo": "Harry Potter y la Orden del Fénix", "descripcion": "Harry Potter se enfrenta a la resistencia del Ministerio de Magia mientras se prepara para la guerra.", "duracion_minutos": 138, "calificacion": 7.5, "poster": "https://imgur.com/V3gbkIW.png" }, { "titulo": "Harry Potter y el misterio del príncipe", "descripcion": "Harry Potter descubre secretos oscuros mientras se prepara para su enfrentamiento final con Lord Voldemort.", "duracion_minutos": 153, "calificacion": 7.6, "poster": "https://imgur.com/7XzrKqK.png" }, { "titulo": "Harry Potter y las Reliquias de la Muerte - Parte 1", "descripcion": "Harry Potter y sus amigos buscan los Horrocruxes mientras el mundo de los magos se sume en la oscuridad.", "duracion_minutos": 146, "calificacion": 7.7, "poster": "https://imgur.com/Bqy3hnc.png" }, { "titulo": "Harry Potter y las Reliquias de la Muerte - Parte 2", "descripcion": "La batalla final entre Harry Potter y Lord Voldemort se acerca mientras se revelan los secretos del pasado.", "duracion_minutos": 130, "calificacion": 8.1, "poster": "https://imgur.com/gD4RqFG.png" }, { "titulo": "Stranger Things", "descripcion": "Un grupo de niños descubre un mundo paralelo y se enfrenta a criaturas sobrenaturales en los años 80.", "duracion_capitulos": 50, "temporadas": [ { "numero": 1, "cantidad_capitulos": 8 }, { "numero": 2, "cantidad_capitulos": 9 }, { "numero": 3, "cantidad_capitulos": 8 }, { "numero": 4, "cantidad_capitulos": 8 } ], "calificacion": 8.7, "poster": "https://imgur.com/SMrIMsq.png" }, { "titulo": "Black Mirror", "descripcion": "Una serie antológica que explora la relación entre la tecnología y la sociedad a través de episodios independientes.", "duracion_capitulos": 60, "temporadas": [ { "numero": 1, "cantidad_capitulos": 3 }, { "numero": 2, "cantidad_capitulos": 4 }, { "numero": 3, "cantidad_capitulos": 6 }, { "numero": 4, "cantidad_capitulos": 6 }, { "numero": 5, "cantidad_capitulos": 3 } ], "calificacion": 8.8, "poster": "https://imgur.com/LaeKZFn.png" }, { "titulo": "The Crown", "descripcion": "La vida de la Reina Isabel II y su reinado a lo largo de las décadas.", "duracion_capitulos": 60, "temporadas": [ { "numero": 1, "cantidad_capitulos": 10 }, { "numero": 2, "cantidad_capitulos": 10 }, { "numero": 3, "cantidad_capitulos": 10 }, { "numero": 4, "cantidad_capitulos": 10 }, { "numero": 5, "cantidad_capitulos": 10 } ], "calificacion": 8.7, "poster": "https://imgur.com/PXwIsOJ.png" }, { "titulo": "The Office", "descripcion": "Un vistazo al día a día de los empleados de una oficina a través de un estilo de falso documental.", "duracion_capitulos": 22, "temporadas": [ { "numero": 1, "cantidad_capitulos": 6 }, { "numero": 2, "cantidad_capitulos": 22 }, { "numero": 3, "cantidad_capitulos": 24 }, { "numero": 4, "cantidad_capitulos": 19 }, { "numero": 5, "cantidad_capitulos": 28 }, { "numero": 6, "cantidad_capitulos": 26 }, { "numero": 7, "cantidad_capitulos": 26 }, { "numero": 8, "cantidad_capitulos": 24 }, { "numero": 9, "cantidad_capitulos": 23 } ], "calificacion": 8.9, "poster": "https://imgur.com/KlTDLsY.png" }, { "titulo": "Game of Thrones", "descripcion": "Las familias nobles de los Siete Reinos luchan por el control del Trono de Hierro.", "duracion_capitulos": 60, "temporadas": [ { "numero": 1, "cantidad_capitulos": 10 }, { "numero": 2, "cantidad_capitulos": 10 }, { "numero": 3, "cantidad_capitulos": 10 }, { "numero": 4, "cantidad_capitulos": 10 }, { "numero": 5, "cantidad_capitulos": 10 }, { "numero": 6, "cantidad_capitulos": 10 }, { "numero": 7, "cantidad_capitulos": 7 }, { "numero": 8, "cantidad_capitulos": 6 } ], "calificacion": 9.3, "poster": "https://imgur.com/8Idfb4j.png" }, { "titulo": "Breaking Bad", "descripcion": "La transformación de un profesor de química en un peligroso criminal después de ser diagnosticado con cáncer.", "duracion_capitulos": 47, "temporadas": [ { "numero": 1, "cantidad_capitulos": 7 }, { "numero": 2, "cantidad_capitulos": 13 }, { "numero": 3, "cantidad_capitulos": 13 }, { "numero": 4, "cantidad_capitulos": 13 }, { "numero": 5, "cantidad_capitulos": 16 } ], "calificacion": 9.5, "poster": "https://imgur.com/eQn6G7F.png" }, { "titulo": "The Mandalorian", "descripcion": "Las aventuras de un cazarrecompensas solitario en los confines de la galaxia, lejos de la autoridad de la Nueva República.", "duracion_capitulos": 40, "temporadas": [ { "numero": 1, "cantidad_capitulos": 8 }, { "numero": 2, "cantidad_capitulos": 8 }, { "numero": 3, "cantidad_capitulos": 8 } ], "calificacion": 8.8, "poster": "https://imgur.com/9zDUIF7.png" }, { "titulo": "Star Wars: The Clone Wars", "descripcion": "La guerra se desata en la galaxia mientras los Jedi lideran el ejército clon contra los Separatistas.", "duracion_capitulos": 22, "temporadas": [ { "numero": 1, "cantidad_capitulos": 22 }, { "numero": 2, "cantidad_capitulos": 22 }, { "numero": 3, "cantidad_capitulos": 22 }, { "numero": 4, "cantidad_capitulos": 22 }, { "numero": 5, "cantidad_capitulos": 20 }, { "numero": 6, "cantidad_capitulos": 13 }, { "numero": 7, "cantidad_capitulos": 12 } ], "calificacion": 8.2, "poster": "https://imgur.com/HlIaOEI.png" } ];
  data: any = ''; // Creamos una variable para almacenar la pelicula que queremos ver
  pelicula: any; // Creamos una variable para almacenar el array de peliculas

  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {  // Inyectamos el servicio ActivatedRoute que nos permite obtener los parametros de la url, en este caso 
  // el id de la pelicula que queremos ver y router para poder navegar entre componentes y rutas de la aplicacion 
    this._activeRoute.params.subscribe(params => { // Nos suscribimos a los parametros de la url
      if (this._router.getCurrentNavigation()?.extras.state) { // Si la navegacion actual tiene un estado, es decir, si hemos navegado desde el componente de peliculas
        this.data = this._router.getCurrentNavigation()?.extras.state; // Obtenemos el estado de la navegacion actual, es decir, la pelicula que hemos seleccionado 
        this.pelicula = this.peliculas.filter((pelicula: any) => { // Filtramos el array de peliculas para obtener la pelicula que hemos seleccionado
          return pelicula.titulo == this.data.pelicula})[0]; // El metodo filter devuelve un array, por lo que accedemos a la posicion 0 para obtener la pelicula
      }
    });
  }
  ngOnInit() {
  }
}  
