# Web interactiva con temática libre - Daily.dev

Este proyecto consiste en el **desarrollo de una aplicación web cuyo tema se centra en la creación de un personaje Adalaber**. Tanto la imagen, color de fondo, texto y datos seleccionados se muestran en tarjetas personalizables y cuyo resultado final puede ser compartido en redes sociales. 
El objetivo principal es permitir la creación de nuevos elementos, así como la consulta y renderización de los elementos ya creados en la web.
La página incluye un formulario para recopilar datos de la usuaria y diseñar una vista previa de la información proporcionada, adaptándose al tema seleccionado.

## Objetivos
* Aprender los conceptos básicos de programación (variables, estructuras de datos, condicionales, funciones, etc.).
* Comprender cómo manipular el DOM de una página y responder a eventos del usuario.
Manejar estructuras de datos complejas con arrays y objetos.
* Realizar peticiones al servidor y almacenar datos en local.
* Implementar Scrum como marco de referencia para el desarrollo del producto, basándose siempre en los valores de Agile como puntos clave del trabajo en equipo y la mejora continua.
* Mejorar la comunicación entre los miembros del equipo.
* Mejorar las habilidades de comunicación en público al exponer el proyecto en la sesión final.

## Caso de uso
Esta web presenta conocimientos tanto en la parte de maquetación como de programación, mostrando como resultado final una página con la que poder interactuar. También permite enseñar las habilidades obtenidas a la hora de trabajar con JavaScript en GitHub.

## Especificaciones
### Tecnologías
Las tecnologías usadas en el desarrollo de la aplicación web han sido:
* Uso avanzado de formularios HTML.
* Maquetación con CSS avanzado (flex y grid).
* Uso de mediaqueries para un diseño responsive usando la estrategia mobile first.
* Gestión de eventos en el navegador (addEventListener).
* Acceso y envío de datos a un servidor.
* Uso de LocalStorage para el almacenamiento en local.
* Uso de git para el control de versiones del proyecto.
* Uso de GitHub Pages para la publicación del resultado en Internet.

### Maquetación
El proyecto consta de 4 páginas:
- **Landing Page**: página de bienvenida.
- **Create Page**: página que incluye un formulario para la recopilación de datos y su vista previa.
- **Final Page**: página que muestra la tarjeta creada por la usuaria. Al enviar el formulario, se muestra una url que será esta página, donde la usuaria podrá visualizar la tarjeta con los datos introducidos en el formulario.
- **About-Us Page**: página que muestra las tarjetas creadas por cada una de las programadoras.

### Funcionamiento
La aplicación funciona siguiendo estos pasos:
1. **Cumplimentación del formulario**. La usuaria irá escribiendo en el formulario y la información se irá previsualizando en tiempo real, mostrando el texto maquetado tal como aparecerá en el resultado final.
2. **Publicación en redes sociales**. La usuaria podrá consultar la página con los datos nuevos y compartir el resultado en X (o en cualquier otra red social).

## Especificaciones del formulario
### Formulario
- Contiene al menos seis campos de entrada, adaptados al tema elegido.
- Incluye de manera obligatoria un campo para seleccionar una foto y un campo de tipo numérico correspondiente a la propiedad field1 (el número debe ser diferente de 0). 
- Los otros campos han sido definidos por las programadoras según su criterio.
- Como máximo solo puede contener 10 campos de entrada (incluidos la foto y el campo de tipo numérico).

### Interacción
- **Campos del formulario**: tienen restricciones para su formato específico (campo de tipo num para el número).
- **Previsualización**: las modificaciones realizadas en el formulario (diseño y contenido), aparecen automáticamente en la vista previa.
- **Sección colapsable**: mediante el uso de eventos, las secciones de diseña, rellena y comparte se ocultan o se muestran según lo desee la usuaria.
- **Almacenamiento de la información**: esta se almacena en el **LocalStorage** (almacenamiento local del navegador) de manera que, al recargar la página, los datos siguen disponibles.
- **Eliminación de la información**: consta de un **botón reset** para borrar los datos introducidos, definido mediante una estructura de datos compleja (con arrays y objetos) que se guarda en el navegador.
- **Compartir en X**: para compartir esta información se siguen 2 pasos.
1. Al hacer clic en el botón de "Enviar", el formulario se envía (submit) a una API que devuelve los datos del elemento creado correctamente.
2. La página que muestra los datos del elemento creado previamente contiene un botón de "Compartir" que enlaza a X, donde hay un tweet con texto predefinido que incluye la URL del nuevo elemento.

## Diseño
El diseño parte de una reinterpretación de la página de Adalab incluido el logo generada con Figma. Además, toda la estética está relacionada con el mundo de la programación como se puede observar en las opciones de fuentes durante la personalización de la tarjeta. Las tipografías han sido obtenidas de Google Font.

**Diseño principal**:
- Paleta de colores:
    - $color-main: #30D8C3;
    - $color-secondary: #8B3198;
    - $color-complementary: #039685;
- Tipografía: 
    - $font-main: "Source Code Pro", monospace;
- Tamaño responsive de las páginas:
    - TABLET @media (min-width:768px).
    - DESKTOP @media (min-width:1200px).

**Diseño de las tarjetas**:
- Paleta de colores:
    - color-option0: rgb(201 181 202);
    - color-option1: #f12711, #f5af19;
    - color-option2: #8B3198, #dea2fd;
    - color-option3: #039685, #30D8C3;
    - color-option4: #3f2b96, #a8c0ff;
- Tipografías: 
    - font-family: "Source Code Pro", monospace;
    - font-family: "JetBrains Mono", serif;
    - font-family: "Fira Code", serif;
    - font-family: "Open Sans", serif;

## Planificación del proyecto
### Sprints
Para la realización de este proyecto se ha trabajado en 2 sprints de 7 sesiones cada uno. Siguiendo los principios ágiles se establecieron pequeños ciclos iterativos de forma que al final de cada uno se generó valor perceptible para nuestros usuarios (los visitantes de la web). El primer día se dedicó a la planificación del sprint (sprint planning) y el resto a trabajar en el desarrollo del proyecto. Se creó el tablero del proyecto y se definieron las tareas principales y los working agreements. Al final de cada sprint se hizo una demo del proyecto para presentar los resultados conseguidos, y una retrospectiva (retro) para evaluar el trabajo en equipo y mejorar en el siguiente sprint.

**Primer sprint:** 
- Demo corta de 5 minutos para presentar el resultado del trabajo al resto de las compañeras y a las profesoras. 
- Retro corta revisando los working agreements acordados al inicio del proyecto.

**Final del segundo sprint (final del proyecto):**
- Demo de 5 minutos más preguntas.
- Retrospectiva usando Scrum.

### Historias de usuario
Como desarrolladoras de una aplicación para crear tarjetas de Adalabers queremos que las usuarias puedan rellenar un formulario con sus datos y vean esa información al momento en una vista previa además de poder borrar los datos o compartirlos, para que puedan crear una tarjeta personalizada de Adalaber y posteriormente publicarla en sus redes sociales.

### Primera. Landing y UI de la herramienta
- Desarrollo de la página de landing.
- Desarrollo de una primera versión básica de la página del formulario y la tarjeta de previsualización, con la maquetación de la estructura básica (para desktop y móvil). Incluye el formulario con los colapsables y la vista previa.
- Desarrollo de la página de la vista de la tarjeta.

### Segunda. Versión interactiva
- Formulario interactivo: al modificar un campo del formulario, se actualiza la vista previa (excepto la foto) (https://books.adalab.es/materiales-del-curso-b-pw-ft/proyectos/p2_web_interactiva/p2_anexo).
- Realización de validaciones de datos del formulario: campos obligatorios, email, etc.

### Tercera. Compartir
- Actualización de la foto en la vista previa de la tarjeta, usando el componente proporcionado (https://github.com/Adalab/Componente-de-foto-de-perfil-js).
- Añadir la funcionalidad de crear la tarjeta, enviando primero los datos al servidor (POST).
- Añadir la funcionalidad de compartir en X.
- Mostrar la tarjeta creada con la información previamente guardada en el servidor (GET).

### Cuarta. Versión offline
- Almacenamiento del contenido en el LocalStorage del navegador.

***NOTA***: Para considerar terminadas todas las historias se publicó la web en GitHub Pages.


## Recursos
- [Starter Kit Adalab](https://github.com/Adalab/adalab-web-starter-kit/) - Para el desarrollo del proyecto.
- [Componente formulario interactivo](https://books.adalab.es/materiales-del-curso-b-pw-ft/proyectos/p2_web_interactiva/p2_anexo) - API para guardar los datos del formulario. 
- [Componente foto perfil](https://github.com/Adalab/Componente-de-foto-de-perfil-js) - JS necesario para la selección de imagen en el formulario.

## Instalación
Dentro de nuestro archivo de trabajo abrir una terminal BASH y clonar el repositorio de github.
Comprobar que estamos en la ruta del directorio adecuada. Posteriormente instalar las dependencias "node_modules" para la ejecución del framework Vite, e iniciar el proyecto. 

Clonar repositorio:
~~~
$ git clone [jacquelinlopez/project-promo-B-module-2-team-3](https://github.com/jacquelinlopez/project-promo-B-module-2-team-3.git)
~~~
Ruta directorio:
~~~
$ cd ../path/to/the/file
~~~
Instalación dependencias:
~~~
$ npm install
~~~
Iniciar proyecto:
~~~
$ npm start
~~~
## Publicación 
En la terminal BASH introducimos los comandos:
1. Generar la página para producción. 
~~~
$ npm run build
~~~
2. Subir el repositorio a la carpeta `docs/` que se acaba de generar.
Se puede usar el comando siguiente para hacer los dos pasos anteriores de una vez:
~~~
$ npm run push-docs
~~~
3. Entrar en la pestaña `settings` del repositorio.
4. En el apartado de GitHub Pages activar la opción **master branch /docs folder**.