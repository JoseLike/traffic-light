# React Traffic Light.

Creando un semaforo con React que sea responsive a las interacciones del usuario.

### Pre-requisitos 📋

1. Ordenador o dispositivo movil.
2. Programa donde copiar el repositorio. (Gitpod, VisualStudioCode, Pycharm ....)
3. Navegador web donde visualizar el resultado del codigo.


## Construido con 🛠️

* [HTML5] 
* [CSS3]  
* [Javascript](https://www.javascript.com/) - Usado para generar interactividad del DOM.
* [Bootstrap v5.1.3](https://getbootstrap.com/) - Libreria para el diseño del HTML.
* [React 17.0.2](https://es.reactjs.org/) - Biblioteca de interfaz para Javascript


## Deployment

Para lanzar este proyecto introduce en la consola el codigo de la ventana inferior, posteriormente si no se muestra el resultado escibre localhost en el buscador.
```
$ npm install
```

```bash
  $ npm run start
```



## Estructura y explicación del codigo ⚙️

* La estructura del ejercicio se basa en componentes jsx de React.
* Se crea un semaforo directamente en el return del componente Home. Utilizamos propiedades CSS para ello. Las clases cuerpo y semaforo-top componen la estructura negra del semaforo. La clase semaforo son los circulos interiores. Las clases red , yellow y green son las clases que aportan el background color con el mismo nombre. Y la clase glow añade el efecto de iluminacion.
* Para el codigo se utiliza el hook useState con variable selected y funcion selectora setSelected.
*En el return hay un div que encierra los tres colores del semaforo. Cada uno un div diferente. Jugaremos con la classname y la fuincion onClick. cuando se hace click en cualquier div mencionado, cambia el valor de selected (rtrue, ytrue, gtrue). 
* Arriba hemos creado 3 variables (red, yellow y green) Dentro de cada una hay un operador ternario el cual lee el valor de selected que se cambia al hacer click en el div mediante el selector setSelected.(Al renderizar la primera vez selected esta vacio). Basicamente todas las variables seleccionan las clases de CSS que dan el color al semaforo y cuando selected por ejemplo es "rtrue", la variable red devuelve las clases anteriores mas la clase glow que añade el efecto de iluminación.
* Finalmente en Index.js se importa Home y se renderiza.


## Autor ✒️

* **Jose Luis Gil** - *Navbar and Jumbotron* - [JoseLike](https://github.com/JoseLike)


También puedes mirar la lista de todos los [contribuyentes](https://github.com/JoseLike/traffic-light) quíenes han participado en este 



## Other features

- Automatic Code Formatting: Use of [Prettier](https://prettier.io/) for automatic code indentation and formatting.
- Error reporting: Use of [eslint](https://eslint.org/) for better error reporting.
- Hot Deploy: Use of [Webpack Development Server](https://webpack.js.org/configuration/dev-server/) for hot deploy and live reload.
- One-command publish of the code to github pages with `npm run deploy:github`.
- Babel 7 (really fast).

## Other features

- Automatic Code Formatting: Use of [Prettier](https://prettier.io/) for automatic code indentation and formatting.
- Error reporting: Use of [eslint](https://eslint.org/) for better error reporting.
- Hot Deploy: Use of [Webpack Development Server](https://webpack.js.org/configuration/dev-server/) for hot deploy and live reload.
- One-command publish of the code to github pages with `npm run deploy:github`.
- Babel 7 (really fast).
