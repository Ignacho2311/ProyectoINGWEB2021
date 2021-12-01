# ProyectoINGWEB2021

INTEGRANTES:
Joaquin Lepez
Dexter Freyggang
Ignacio Candia
Carlos Ortega

LINK DEL GIT:
https://github.com/Ignacho2311/ProyectoINGWEB2021



NOTAS:
Profesora, queremos se単alar algunos puntos que consideramos importantes para esta entrega. Estos los diferenciamos entre aquellos que generan problemas que dependen del equipo de colombia y los que nos surgieron a nosotros:
Para observar mejor este documento, le recomendamos maximizar este archivo <3
--------------------------------------

1) PROBLEMAS EXTERNOS: Situaciones que no pudimos controlar, que surgieron desde el equipo de Cali:
Para el cumplimiento de los requisitos del proyecto realizado en conjunto con el equipo de la UAO de Cali, tuvimos ciertos inconvenientes producto de que nosotros no manejamos la forma en la que, desde un inicio, fue implementado el proyecto. Tal como vimos en clase con usted, al momento de 	crear el proyecto por consola, una de los elementos que hay que definir es si el proyecto se imlementara con SASS. El equipo de Cali, que fueron quienes crearon el proyecto, no lo hicieron 	asi, por lo que cuando nos compartieron lo que llevaban del proyecto NO ESTABA IMPLEMENTADO SASS. Es por este motivo, que si bien en los requisitos que ud pidio para el proyecto estaba indicado que debia usarse SASS, nosotros no pudimos implementarlo. De igual modo, en gran parte de la 	estructura de lo que ya tenian definido, las instrucciones CSS las tenian escritas de forma literal en el HTML (y no en un archivo CSS), por lo que en la mayoria del proyecto, los archivos 	CSS no tenian nada (las instrucciones estaban vinculadas en el html con "style").

Desde un principio, el equipo de Cali nos indico que debiamos encargarnos unicamente de crear el frontend de todo lo relacionado con el backend, el backend  completo y unirlo con el frontend. El front end de la pagina principal lo hicieron ellos, mientras que el del login, formulario de crear usuario, perfil y modificar datos, los hicimos nosotros (todos los que se relacionaban con los datos/BD).

Es por esto que ud encontrara inconsistencias en el formato de programacion utilizado por ellos vs el utiizado por nosotros. De igual modo, encontramos multiples veces lo que a nuestro parecer y segun lo que studiamos/encontramos en internet, eran errores en su forma de programar. Lo 	queremos se単alar no por indicar defectos o errores que hayan cometido, sino unicamente para que no se nos perjudique en nuestra nota por los errores (en caso de que lo sean) comentidos por ellos. Por ejemplo, el uso de estilos CSS en el HTML (para eso existe el archivo de CSS), el no uso de SASS (en su defecto nos vimos obligados a usar CSS), el uso de un formulario DENTRO de otro formulario (situacion que, segun indagamos, es completamente equivoca pues generaria errores con el boton submit en el momento de finalizar el formulario interno dentro el externo), basar el proyecto COMPLETAMENTE en modulos y no en componentnes (que nos dificulto realizar la vinculacion de las rutas entre HTML y TS), el no uso de caracteristicas responsivas (lo que dificulto poder hacer responsivas todas las partes que incorporamos nosotros), el uso de la variable IMC (ellos no la agregaron y nos pidieron respetar el mockup que nos pasaron, en el que no estaba incluido), la consideracion del rango de edad de hasta 16 a単os (ellos no pusieron margen de edad), la funcionalidad de los juegos y bancos de preguntas, que ellos especificamente nos indicaron no realizar pues la harian ellos, por lo que esa parte de la pagina no funciona y no nos corresponde su ausencia.

--------------------------------------


2) PROBLEMAS INTERNOS: Situaciones que nos surgieron a nostros, que no pudimos solucionar
No pudimos vincular todos los elementos entre si, por lo que indicamos donde se observa cada uno de ellos y su ruta en caso de ser necesaria y no poder acceder a el mediante clicks en la pagina web, ya que no todos los botones funcionan. Los elementos fueron organizamos segun los requisitos:

a. Requerimientos funcionales
	1.- Autentificacion de usuario:		El sistema es capaz de validar un usuario que exista por su id (correo) y que su contrase単a sea correcta. Esto se observa en la consola al momento de iniciar sesion con un usuario

	2.- Crear cuenta:			El sistema es capaz de agregar un nuevo usuario. Esto se observa en http://localhost:4200/formulario

	3.- Actualizar cuenta			El sistema es capaz de modificar un usuario. Esto se observa en http://localhost:4200/read al clickear el boton "Actualizar"

	4.- Eliminar cuenta			El sistema es capaz de eliminar un usuario. Esto se observa en http://localhost:4200/read al clickear el boton "Borrar cuenta". Es necesario actualizar la pagina para observar el cambio.

	5.- Registro y validacion de datos	El sistema es capaz de eliminar un usuario. Esto se observa en http://localhost:4200/formulario al completar el formulario y enviarlo.



b. Requerimientos no funcionales
	1.- Almacenamiento de los datos		Los 19 datos identificados segun las conversaciones realizadas con el equipo de Cali son almacenados en una base de datos

	2.- Responsividad			Logramos generar responsividad en los elementos que realizamos nosotros, todo lo vinculado al backend



c. CRUD (estos salen en detalle en requerimientos funcionales)
	1.- C (create)				Se observa al momento de crear un usuario

	2.- R (read)				Se observa al momento de autentificar usuario

	3.- U (update)				Se observa al actualizar un perfil de usuario

	4.- D (delete)				Se observa al eliminar un usuario

