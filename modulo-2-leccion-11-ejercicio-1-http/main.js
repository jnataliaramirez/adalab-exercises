'use strict';
/* 
* EJERCICIO 1
* Vamos a explorar un API abierto de información sobre el mundo Star Wars. En esta página tenemos la documentación completa del API y un formulario que nos permite hacer peticiones a la URL que indiquemos. Identifica la siguiente información sobre SWAPI:
? la URL base del API
* https://swapi.dev/api/

? si necesita autenticación
* completely open API

? método HTTP que deben usar las peticiones a este API
* HTTP/1.0 200 OK
* Content-Type: application/json
* {
*    "films": "https://swapi.dev/api/films/",
*    "people": "https://swapi.dev/api/people/",
*    "planets": "https://swapi.dev/api/planets/",
*    "species": "https://swapi.dev/api/species/",
*    "starships": "https://swapi.dev/api/starships/",
*    "vehicles": "https://swapi.dev/api/vehicles/"
* }

? URL para acceder a la info del personaje "Luke Skywalker"
* http https://swapi.dev/api/people/1/

? URL para acceder a la info de la película "A New Hope"
* http "https://swapi.dev/api/films/1/",

? a qué otros recursos puedo acceder desde el API además de personajes y pelis
* films, people, planets, species, startships, vehicles

? URL para acceder al listado de personajes, ¿está paginada?
* http https://swapi.dev/api/people

? cómo puedo buscar personajes mediante la URL
* Con el atributo id

? cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee
* https://swapi.dev/api/planets/1/?format=wookiee
 ! ?format=wookiee
*/ 