# [PRÁCTICA 7. DESTRAVATE](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-grupof.git). 

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101036694/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101036694?branch=main)

## Carla Oval Torres, Jairo Alonso Abreu, Gabi Vacaru

## Índice <a name="índice"></a>
1. [Introducción](#introducción)
2. [Descripción de los requisitos del sistema](#requisitos)
3. [Funcionamiento](#funcionamiento)
    1. [Tipos de datos (rutas, retos, usuarios y grupos)](#tipos)
    2. [Colecciones de datos (schemas)](#colecciones)
    3. [Base de datos](#database)
    4. [Programa principal](#principal)
3. [Conclusiones](#conclusiones)
4. [Referencias](#referencias)

## Introducción <a name="introducción"></a>
> [Volver al índice](#índice)

En esta práctica, la primera grupal de la asignatura, tendrá que llevar a cabo un diseño orientado a objetos del modelo de datos de un sistema de información que permita almacenar registros de actividades deportivas.

Todo el código desarrollado deberá estar alojado en el repositorio generado tras la aceptación de la asignación grupal de GitHub Classroom. En ese sentido, utilice en dicho repositorio una estructura de proyecto similar a la que hemos visto en clase.

Trate de respetar los principios SOLID de diseño orientado a objetos. Recuerde hacer uso durante su desarrollo de todas las herramientas relacionadas con el cubrimiento del código (Coveralls), integración contínua (Github Actions) y calidad del código (Sonar Cloud).

Por último, tendrá que comentar en un informe la solución diseñada, haciendo hincapié en las decisiones de diseño que ha implementado.

## Descripción de los requisitos del sistema <a name="requisitos"></a>
> [Volver al índice](#índice)

> Rutas
> 
> Para cada ruta incluida dentro del sistema, se debe almacenar la información siguiente:
> 1. ID único de la ruta.
> 2. Nombre de la ruta.
> 3. Geolocalización del inicio (coordenadas).
> 4. Geolocalización del final de la ruta (coordenadas).
> 5. Longitud de la ruta en kilómetros.
> 6. Desnivel medio de la ruta.
> 7. Usuarios que han realizado la ruta (IDs).
> 8. Tipo de actividad: Indicador si la ruta se puede realizar en bicicleta o corriendo.
> 9. Calificación media de la ruta.

> Usuarios
> 
> Dentro del sistema, necesitamos la siguiente información de los usuarios:
> 1. ID único del usuario (puede ser un username creado por el usuario en el registro o un valor generado automáticamente por el sistema).
> 2. Nombre del usuario.
> 3. Actividades que realiza: Correr o bicicleta.
> 4. Amigos en la aplicación: Colleción de IDs de usuarios con los que interacciona.
> 5. Grupos de amigos: Diferentes colecciones de IDs de usuarios con los que suele realizar rutas.
> 6. Estadísticas de entrenamiento: Cantidad de km y desnivel total acumulados en la semana, mes y año.
> 7. Rutas favoritas: IDs de las rutas que el usuario ha realizado con mayor frecuencia.
> 8. Retos activos: IDs de los retos que el usuario está realizando actualmente.
> 9. Histórico de rutas: Los usuarios deben almacenar el historial de rutas realizadas desde que se registraron en el sistema. La información almacenada en esta estructura de datos deberá contener la información de la fecha y el ID de la ruta realizada. Nótese que un usuario puede realizar más de una ruta al día y está decisión puede afectar al tipo de estructura en el que se almacena la información.

> Grupos
> 
> Un grupo de usuarios engloba la información de los usuarios que se unen para realizar rutas juntos.
> 1. ID único del grupo.
> 2. Nombre del grupo.
> 3. Participantes: IDs de los miembros del grupo.
> 4. Estadísticas de entrenamiento grupal: Cantidad de km y desnivel total acumulados de manera grupal en la semana, mes y año
> 5. Clasificación de los usuarios: Ranking de los usuarios que más entrenamientos han realizado históricamente dentro del grupo, es decir, ordenar los usuarios por la cantidad de km totales o desnivel total que han acumulado.
> 6. Rutas favoritas del grupo: Rutas que los usuarios del grupo han realizado con mayor frecuencia en sus salidas conjuntas.
> 7. Histórico de rutas realizadas por el grupo: Información similar que almacenan los usuarios pero en este caso referente a los grupos. Nótese que un usuario puede realizar rutas con un grupo y/o de manera individual el mismo día. Es decir, a modo de simplificación, asumimos que todos los usuarios de un grupo realizan la actividad cuando se planifica. Aunque, también pueden realizar otras actividades de manera individual.

> Retos
> 
> Los retos serán otra entidad dentro del sistema. Esta entidad deberá contener toda la información asociada a objetivos de entrenamientos:
1. ID único del reto.
2. Nombre del reto.
3. Rutas que forman parte del reto.
4. Tipo de actividad del reto: bicicleta o correr.
5. Km totales a realizar (como la suma de los kms de las rutas que lo engloban)
6. Usuarios que están realizando el reto.


### Funcionamiento <a name="funcionamiento"></a>
> [Volver al índice](#índice)

> Para comprobar el funcionamiento de su diseño deberá crear:
> 1. Al menos 10 rutas distintas.
> 2. Incluir al menos 20 usuarios distintos.
> 3. Un mínimo de 5 grupos.
> 4. Al menos 3 retos.
>
> En este punto, deberá hacer uso del módulo Inquirer.js para la gestión de una línea de comandos interactiva. De este modo, su aplicación deberá permitir añadir, borrar y modificar rutas, usuarios, grupos y retos. Para ello, le recomendamos que lea el Capítulo 1 del libro Essential TypeScript: From Beginner to Pro, dado que se describe un ejemplo detallado de su uso, incluyendo cómo podría hacer para que toda la información introducida persista mediante el uso del paquete Lowdb. Recuerde hacer uso de las versiones de los paquetes utilizadas en el libro.
> 
> En cuanto a la gestión avanzada de rutas, usuarios, grupos y retos, simplemente se requiere poder navegar la información asociada a estás entidades. Para cada tipo de información se podrá mostrar la información correspondiente de la siguiente manera:
> 
> Rutas:
> - Alfabéticamente por nombre de la ruta, ascendente y descendente.
> - Cantidad de usuarios que realizan las rutas, ascendente y descendente.
> - Por longitud de la ruta, ascendente y descendente.
> - Por la calificación media de la ruta, ascendente y descendente.
> - Ordenar por actividad: correr o ciclismo.
> 
> Usuarios:
> - Alfabéticamente por nombre del usuario, ascendente y descendente.
> - Por cantidad de KM realizados (ascendente y descendentemente) en función de la semana actual, mes o año.
> 
> Grupos:
> - Alfabéticamente por nombre de la grupo, ascendente y descendente.
> - Por cantidad de KM realizados conjuntamente (ascendente y descendentemente) en función de la semana actual, mes o año.
> - Por la cantidad de miembros que lo componen, ascendente y descendente.
> 
> Retos:
> Alfabéticamente por nombre del reto, ascendente y descendente.
> Por cantidad de KM que se deben realizar, ascendente y descendente.
> Por la cantidad de usuarios que lo están realizando, ascendente y descendente.

> #### Clase Gestor
> Por último, deberá crear una clase Gestor que permita gestionar el tratamiento de la información del sistema.
> 
> Para el funcionamiento de la clase Gestor, también necesitará hacer uso de Inquirer.js. En concreto, un usuario podrá:
> Registrarse en el sistema. Un usuario que se conecte por primera vez al sistema deberá poder incluir su información para ser almacenada en el sistema. Asimismo, un usuario podrá visualizar el listado de usuarios existentes dentro del sistema y añadir/borrar amigos.
> Visualizar todas las rutas existentes dentro del sistema. En este apartado se deben poder consultar el listado de rutas así como acceder a la información completa de cada una de ellas.
> Unirse a un grupo existente. Este apartado considera la opción de un usuario que desea incluirse dentro de un grupo ya existente en el sistema.
> Visualizar, crear y borrar grupos. Un usuario podrá borrar un grupo, pero solo si esta ha sido creado por él, es decir, no se podrá borrar un grupo pre-cargado en el sistema. Por otro lado, los grupos se podrán guardar usando el mismo sistema empleado para guardar la información cargada en el sistema. Por último, considere que en posteriores conexiones al sistema, el usuario podrá desear borrar un grupo que haya creado anteriormente. Debido a esto, se deberá distinguir entre los grupos creados por el usuario y los creados por el sistema con el objetivo de evitar borrar información sin permiso.


### Tipos de datos (rutas, retos, usuarios y grupos) <a name="tipos"></a>
> [Volver al índice](#índice)

> Descripcion de la clase

Explicacion

#### Clase X:

```typescript

```

Explicación


#### Tests:

Explicación

```typescript

```

Explicación

```typescript

```

#### Cumplimiento de los principios SOLID en la clase X:

Esta clase `X` cumple los principios SOLID con la siguiente justificación:

- **Single responsibility (SRP)**: 

- **Open/Closed Principle (OCP)**: 

- **Liskov Substitution Principle (LSP)**: 

- **Interface Segregation Principle (ISP)**: 

- **Dependency Inversion Principle (DIP)**: 


### Colecciones de datos (schemas) <a name="colecciones"></a>
> [Volver al índice](#índice)

### Base de datos <a name="database"></a>
> [Volver al índice](#índice)

### Programa principal <a name="principal"></a>
> [Volver al índice](#índice)

### Conclusiones <a name="conclusiones"></a>
> [Volver al índice](#índice)

Explicacion

### Referencias <a name="referencias"></a>
> [Volver al índice](#índice)

1. [Entrada de texto](https://www.npmjs.com/package/prompt-sync)
2. [Formato de escape ANSI](https://es.wikipedia.org/wiki/C%C3%B3digo_escape_ANSI#:~:text=Los%20c%C3%B3digos%20de%20escape%20ANSI,color%20o%20moviendo%20el%20cursor.)

