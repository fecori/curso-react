### Introducción, Qué es React? y Ciclo de Vida.

React es un framework creado por los ingenieros de Facebook que nos ayudará a crear aplicaciones SPA(Single Page Application) y tiene varios ciclos de vida, son como funciones especiales, que nos permiten ejecutar funciones o declarar lógica de manera más desmenuzada, dándonos mayor control sobre todo el proceso de renderizado de nuestros componentes.

### Configuración del Entorno: Webpack, NPM, etc
- Instalacion de react-app (npm i react-app -G)
- Iniciamos nuestra primera app en react (npm init react-app mi-app)
- Estructura que se ha creado apartir de react-app

```html
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
```

- Instalacion libreria Next.js (SSR)
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

```html
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
```

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

###### constructor(): este ciclo de vida se ejecuta cuando el componente es instanciado. Acá podemos definir su configuración inicial. Por ejemplo, configurar el estado o crear conexiones con nuestras funciones.

    constructor(props) {
      super(props);
      
      this.state = {
        initialState: true,
      };
      this.method = this.method.bind(this);
    }

###### componentWillMount(): las modificaciones en este ciclo de vida no causan actualizaciones en el componente, y se corre justo antes de montar o renderizar el componente. Por ejemplo, un cambio condicional en el estado.

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

###### render(): este método, en esta etapa, genera la interfaz gráfica inicial. Modificar el estado puede causar un ciclo infinito. Por esta razón este método debe se puro.

    render() {
      return (
        <h1>Hello world</h1>
      );
    }

###### componentDidMount(): el código que retorna nuestra función ya ha sido renderizado en el DOM y nuestra interfaz, hemos llegado al final de la etapa de montado. Este método solo se ejecuta una única vez. Es perfecto para trabajar con código asincrónico, llamados a APIs, y código retrasado con setTimeout.

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

###### componentWillReceiveProps(nextProps): el primer ciclo en la etapa de actualización. Nos permite hacer cambios en el componente basados en un cambio en las propiedades. La razón por la que este método recibe el parámetro nextProps, es para permitirnos validar el cambio en las propiedades. nextProps debe ser diferente a this.props.

    componentWillReaceiveProps(nextProps) {
      if(this.props.num1 !== nextProps.num1 || this.props.num2 !== nextProps.num2) {
        this.setState({
          sum: nextProps.num1 + nextProps.num2,
        })
      }
    }

###### shouldComponentUpdate(nextProps, nextState): nos permite validar un cambio en el estado o en las propiedades del componente por medio de nextProps, this.props, nextState, y this.state y retornar verdadero o falso para renderizar nuevamente o no el componente, respectivamente. Por defecto, siempre retorna true.

    shouldComponentUpdate(nextProps, nextState) {
      return nextProps.name !== this.props.name
    }

###### componentWillUpdate(nextProps, nextState): se ejecuta cuando shouldComponentUpdate() retorna verdadero. Se hacen los últimos cambios antes de renderizar nuevamente el componente.

    componentWillUpdate(nextProps, nextState) {
      if(this.state.age !== nextStage.age) {
        this.onGrow();
      }
    }

###### componentDidUpdate(prevProps, prevState): este es el último método de esta etapa. El componente se ha renderizado con los nuevos valores. Es perfecto para interactuar con el DOM

    componentDidUpdate(prevProps, prevState) {
      this.createCard();
    }

##### Los componentes son desmontados
Está es la última fase de los componentes. Consta de un único método que es invocado justo antes de que el componente sea destruido o sea sacado de nuestra interfaz.

###### componentWillUnmount(): su principal funcionalidad es limpiar nuestro componente. Por ejemplo, dejar de escuchar eventos o cancelar peticiones HTTP pendientes.

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

### Propiedades (props) y Estado (state).
- Pequeno intro a Propiedades y Estado de ReactJs


### Eventos.
- Pequeno intro a Eventos de ReactJs


### Formularios.

Para este ejemplo instalaremos react-form

    npm i react-final-form--save

Crearemos un nuevo componente

    mkdir -p components/formulario
    touch components/formulario/index.jsx components/formulario/style.scss
    
Nuestra estructura actualizada

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
    │   ├── layouts
    │   │    ├── index.jsx
    │   │    └── style.scss
    │   ├── formulario
    │   │    ├── index.jsx
    │   │    └── style.scss
    │   └── galeria
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

Iniciamos nuestro componente

    import React, {Component} from 'react'
    
    export default class Formulario extends Component {
        render() {
            return <div>formulario</div>
        }
    }

Agregamos nuestra libreria informed a nuestro proyecto

    import { Form, Field } from 'react-final-form';
    
Agregamos un formulario de ejemplo

    <form onSubmit={handleSubmit}>
        <h2>Simple Default Input</h2>
        <div>
            <label>Nombre</label>
            <Field name="nombre" component="input" type="text"/>
        </div>
        <button type="submit">Enviar</button>
    </form>

Agregamos nuestra funcion para enviar los datos de nuestro formulario, primero lo iniciamos en nuestro constructor

    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }

Agregamos la funcion dentro del componente

    onSubmit(values) { // nuestro formulario nos enviara solo una variable con los datos del formulario, en este caso se llamara values
        console.log('onSubmit', values)
    }

En nuestro componente del formulario 'Form' agregamos las funciones de onSubmit y los parametros que recivira del mismo formulario

    <Form onSubmit={this.onSubmit} render={({submitError, handleSubmit, reset, submitting, pristine, values}) => ( NUESTROFORMULARIO )}
    
Con esto ya tenemos nuestro formulario funcionando y enviando nuestros datos.

#### Validacion de los campos

Comenzamos a hacer las validaciones del formulario.

Para este ejemplo modificaremos el subcomponente Field de react-final-form, de la siguiente manera:

    <Field name="nombre">
        {({input, meta}) => (
            <div>
                <label>Nombre</label>
                <input {...input} type="text" placeholder="Ingresar nombre"/>
                {(meta.error || meta.submitError) &&
                meta.touched && <span>{meta.error || meta.submitError}</span>}
            </div>
        )}
    </Field>

Y agregaremos otra funcion dentro de nuestro constructor, en este caso this.validate:

    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
    
Iniciamos la funcion para validate, en el cual validaremos que el campo Nombre sea obligatorio:

    validate(values) {
        const errors = {};
        if (!values.nombre) {
            errors.nombre = "Requerido";
        }
        return errors;
    }
    
Para terminar iniciamos dentro de Form nuestra funcion de validacion

    <Form onSubmit={this.onSubmit} validate={this.validate} render={({submitError, handleSubmit, reset, submitting, pristine, values}) => ( NUESTROFORMULARIO )}

### Trabajando con Data: API's.
Para este ejemplo vamos a necesitar de isomorphic-unfetch

    npm i isomorphic-unfetch --save
    
Crearemos un nuevo componente

    mkdir -p components/galeria
    touch components/galeria/index.jsx components/galeria/style.scss
    
Nuestra estructura actualizada

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
    │   ├── layouts
    │   │    ├── index.jsx
    │   │    └── style.scss
    │   ├── formulario
    │   │    ├── index.jsx
    │   │    └── style.scss
    │   └── galeria
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
Utilizaremos es siguiente JSON http://www.json-generator.com/api/json/get/ceNzGkwtWq?indent=2

##### Utilizando metodo GET:

Iniciamos nuestro componente

    import React, {Component} from 'react'
    import fetch from 'isomorphic-unfetch'
    
    export default class Galeria extends Component {
       
        render() {
            return <div>Galeria de imagenes</div>;
        }
    }


Iniciamos nuestro constructor

    constructor(props) {
        super(props);
        this.state = {
            picture: {}
        }
    }

Dentro del state 'picture' guardaremos todas las imagenes que nos devuelva isomorphic-unfetch, luego le decimos a nuestro componente que cada vez que se monte (Mount) haga la consulta a nuestro json para traer los objetos.

    componentWillMount() {
        fetch('http://www.json-generator.com/api/json/get/ceNzGkwtWq?indent=2')
            .then(r => r.json()) // Devolvemos el resultado tipo JSON
            .then(data => {
                this.setState({
                    picture: data // almacenamos la respuesta dentro del state picture
                })
            }).catch(err => {
            console.log('Error!', err);
        });
    }

Despues de almacenar nuestras imagenes dentro del state picture comenzamos a armar la respuestra dentro del render del componente.

    const {picture} = this.state; // recuperamos los datos que almacensmos con componentWillMount
    let contPicture = null; // iniciamos una variable en la cual agregaremos todos los objetos

    if (picture.length) { // verificamos si nuestro state picture contiene objetos
        contPicture = picture.map((image, key) => <div key={key}><img src={image.picture} alt=""/></div>) // hacemos un each al objeto picture para agregarlo dentro de nuestra variable de contenido, en este caso contPicture, para mostrarlo en el renderizado.
    }
    
Agregamos la variable contPicture dentro del renderizado del componente

    return <div>{contPicture}</div>;
    


Creación de una pequeña Aplicación. (se puede ir desarrollando mientras aprenden los conceptos)