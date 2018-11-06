### Introducción, Qué es React? y Ciclo de Vida.

React es un framework creado por los ingenieros de Facebook que nos ayudará a crear aplicaciones SPA(Single Page Application) y tiene varios ciclos de vida, son como funciones especiales, que nos permiten ejecutar funciones o declarar lógica de manera más desmenuzada, dándonos mayor control sobre todo el proceso de renderizado de nuestros componentes.

### Configuración del Entorno: Webpack, NPM, etc
- Instalacion de react-app (npm i react-app -G)
- Iniciamos nuestra primera app en react (npm init react-app mi-app)
- Estructura que se ha creado apartir de react-app


    mi-app
    ├── README.md
    ├── node_modules
    ├── package.json
    ├── .gitignore
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   └── manifest.json
    └── src
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── index.css
        ├── index.js
        ├── logo.svg
        └── serviceWorker.js


- Instalacion libreria Next (SSR)
- Modificamos el package.json para iniciar next en vez de react-scripts


    "start": "next start",
    "build": "next build",
    "dev": "next dev"


- Creamos la carpeta pages (mkdir pages)
- Iniciamos con npm run dev
- Creamos el archivo llamado index.js (pages/index.js) en donde colocamos el siguiente codigo:


    const Index = () => (
      <div>
        <p>Hello Next.js</p>
      </div>
    )
    
    export default Index


- Nueva estructura con Next.js


    mi-app
    ├── README.md
    ├── node_modules
    ├── package.json
    ├── .gitignore
    ├── pages
    │   ├── index.js
    │   ├── _error.js
    │   └── about.js
    └── static
        ├── favicon.ico
        └── manifest.json
 

### JSX.

JSX es una extensión de JavaScript creada por Facebook para el uso con su librería React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código a JavaScript. ... Recuerda, no es escribir HTML dentro de JS, es una forma de crear JS de una manera más práctica ;)

Antes:

    "use strict";
    
    React.createElement(
      "div",
      { class: "container" },
      React.createElement("h1", { id: "title" }, "Lorem ipsum"),
      React.createElement("img", {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg",
        alt: "tree",
        width: "30px",
        height: "30px"
      }),
      React.createElement(
        "p",
        { style: "color: blue;" },
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore..."
      )
    );

Despues:

    const DemoJSX = () => (
      <div>
        <h1 id="title">Lorem ipsum</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg" alt="tree" width="30" height="30">
        <p style={{color: 'blue'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore...</p>
      </div>
    )
    
    export default DemoJSX

### Componentes.
- Los componentes pasan por varios siclos de vida (funciones especiales) y son creados, montados, actualizados, y desmontados.

Veamos cada ciclo de vida en detalle:

##### Los componentes son creados y actualizados
Nuestros componentes deben pasar una vez por esta etapa. En esta, se ejecutan los ciclos de vida, desde que se invoca el componente hasta que se muestra por primera vez en la interfaz gráfica. En el siguiente orden:

constructor(): este ciclo de vida se ejecuta cuando el componente es instanciado. Acá podemos definir su configuración inicial. Por ejemplo, configurar el estado o crear conexiones con nuestras funciones.

    constructor(props) {
      super(props);
      
      this.state = {
        initialState: true,
      };
      this.method = this.method.bind(this);
    }

componentWillMount(): las modificaciones en este ciclo de vida no causan actualizaciones en el componente, y se corre justo antes de montar o renderizar el componente. Por ejemplo, un cambio condicional en el estado.

    componentWillMount() {
      let answer;
      if(this.props.number % 3 === 0 && this.props.number % 5 === 0) {
        answer = 'fizzbuzz';
      } else if(this.props.number % 3 === 0) {
        answer = 'buzz';
      } else if(this.props.number % 5 === 0) {
        answer = 'fizz';
      } else {
        answer = this.props.number
      }
      
      this.setState({
        answer: answer
      });
    }

render(): este método, en esta etapa, genera la interfaz gráfica inicial. Modificar el estado puede causar un ciclo infinito. Por esta razón este método debe se puro.

    render() {
      return (
        <h1>Hello world</h1>
      );
    }

componentDidMount(): el código que retorna nuestra función ya ha sido renderizado en el DOM y nuestra interfaz, hemos llegado al final de la etapa de montado. Este método solo se ejecuta una única vez. Es perfecto para trabajar con código asincrónico, llamados a APIs, y código retrasado con setTimeout.

    componentDidMount() {
      apiCallMethod()
        .then(() => {
          this.setState({ success: true });
        })
        .catch(() => {
          this.setState({ success: false });
        });
      }
    }

##### Los componentes se actualizan. Bueno, no siempre

Los componentes pueden o no actualizarse, y lo pueden hacer más de una vez. Los cambios en el estado o en las propiedades, son los causantes de estas actualizaciones, generando una interfaz con los nuevos valores. Los ciclos es esta etapa son:

componentWillReceiveProps(nextProps): el primer ciclo en la etapa de actualización. Nos permite hacer cambios en el componente basados en un cambio en las propiedades. La razón por la que este método recibe el parámetro nextProps, es para permitirnos validar el cambio en las propiedades. nextProps debe ser diferente a this.props.

    componentWillReaceiveProps(nextProps) {
      if(this.props.num1 !== nextProps.num1 || this.props.num2 !== nextProps.num2) {
        this.setState({
          sum: nextProps.num1 + nextProps.num2,
        })
      }
    }

shouldComponentUpdate(nextProps, nextState): nos permite validar un cambio en el estado o en las propiedades del componente por medio de nextProps, this.props, nextState, y this.state y retornar verdadero o falso para renderizar nuevamente o no el componente, respectivamente. Por defecto, siempre retorna true.

    shouldComponentUpdate(nextProps, nextState) {
      return nextProps.name !== this.props.name
    }

componentWillUpdate(nextProps, nextState): se ejecuta cuando shouldComponentUpdate() retorna verdadero. Se hacen los últimos cambios antes de renderizar nuevamente el componente.

    componentWillUpdate(nextProps, nextState) {
      if(this.state.age !== nextStage.age) {
        this.onGrow();
      }
    }

componentDidUpdate(prevProps, prevState): este es el último método de esta etapa. El componente se ha renderizado con los nuevos valores. Es perfecto para interactuar con el DOM

    componentDidUpdate(prevProps, prevState) {
      this.createCard();
    }

##### Los componentes son desmontados
Está es la última fase de los componentes. Consta de un único método que es invocado justo antes de que el componente sea destruido o sea sacado de nuestra interfaz.

componentWillUnmount(): su principal funcionalidad es limpiar nuestro componente. Por ejemplo, dejar de escuchar eventos o cancelar peticiones HTTP pendientes.

    componentWillUnmount() {
      window.removeEventListener(anyEvent, anyEventHandler());
    }

- Creamos nuestra carpeta llamada components (mkdir components), en el cual vamos a agregar todos los componentes a tratar en este curso.
- Creamos los componentes header, footer y layouts
- Por cada componente crearemos index.jsx y styles.scss

```ssh
    mkdir -p components/header components/footer components/layouts
    touch components/header/index.jsx components/footer/index.jsx components/layouts/index.jsx
    touch components/header/style.scss components/footer/style.scss components/layouts/style.scss
```

- Nuestra estructura actualizada.

```html
    mi-app
    ├── README.md
    ├── node_modules
    ├── package.json
    ├── .gitignore
    ├── components
    │   ├── header
    │   │    ├── index.jsx
    │   │    └── style.scss
    │   ├── footer
    │   │    ├── index.jsx
    │   │    └── style.scss
    │   └── layouts
    │        ├── index.jsx
    │        └── style.scss
    ├── pages
    │   ├── index.js
    │   ├── _error.js
    │   └── about.js
    └── static
        ├── favicon.ico
        └── manifest.json
```

### Propiedades y Estado.
- Pequeno intro a Propiedades y Estado de ReactJs


### Eventos.
- Pequeno intro a Eventos de ReactJs


### Formularios.


### Trabajando con Data: API's.


Creación de una pequeña Aplicación. (se puede ir desarrollando mientras aprenden los conceptos)