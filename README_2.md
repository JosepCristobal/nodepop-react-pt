# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


1 Ejecutamos coamndo para generar proyecto  npx create-react-app nodepop-react-pt el nombre de la carpeta no admite mayúsculas.
2 Nos situamos en el directorio que nos ha generado  cd nodepop-react-pt y ejecutamos el npm install y npm start.
3 Podemos ver la página principal que nos viene por defecto.
4 Vamos a limpiar carpetas se ejemplos que no son necesarios.
5 Empezamos por el src/index.js
6 Borramos reportWebVitals y logo
7 Creamos utils/storage.js para controlar el local storage, de momento para gestionar el token
8 Instalando react-router-dom
9 Creamos src/api/client.js que nos permitirá acceder a la API rest que nos gestionará la utenticación y obtención de token
10 Generamos un fichero .env para guardar variables de entorno
11 Instalamos el paquete de axios que nos permite gestionar la llamadas al API
12 Vamos a preparar el backend para poder empezar a trabajar con él. A partir de ahora es importante tener algún dato de prueba.
13 Instalado el backend nodepop-api y ejecutamos el proyecto y funciona.
14 Introducimos datos de usuario a través de swagger y también hacemos la prueba con Postman.
15 Ya tenemos nuetro backend a punto para empezar a desarrollar nuestro front.
16 Volvemos a nuestro proyecto de front y vamos a utilizar el contexto para la verificación y gestión de usuarios autenticados.
17 Creamos en src/components/auth/context.js que en App.js envolveremos todas nuestras páginas en este componente.
18 En App importamos react-router-dom y prop-types para navegar entre rutas y verificar tipos de datos tratados, respectivamente.
19 Creando la LoginPage en components/auth/LoginPage y sus dependencias.
20 Guardando token en el local storage.
21 Creando index.js de exportación por folders
22 En components/shared creamos los componentes que nos harán falta en nuestros formularios. Inicialmente en el de login.
23 Creados Button.js , FormField.css, FormField.js e index.js
24 Creamos hooks personalizados en src/hooks/useForm.js
25 Modificamos el App.js para marcar las rutas del 404 y Login de momento.
26 Instalando styled-components.
27 Instalamos propy-types y date-fns classnames
28 Creamos el /utils/FormField.js
29 Ya tenemos nuestra primera vesión de formulario de Login.
30 Implementando el checkbox y controlar su valor a través del hook personalizado useForm.js
31 Se implementa en una sola función handleChange de nuestro hook personalizado.
32 Controlamos el guardar o no en el local storage el token resultante de la validación. Lo controlamos en el auth.js a través de credentials.
33 Creamos y empezamos a utilizar el PrivateRoute. Lo utilizamos para gestionar si estás autenticado y a que páginas puedes acceder con o sin autenticatión.
34 Vamos ha crear las carpetas y la gestión del Layout.
35 Inicialmente adaptaremos el Layout del ejercicio de clase para nuestra práctica y si sobra tiempo, lo personalizaremos un poco más.
36 Empezamos a crear estructura de carpetas para los anuncios (adverts) en components/adverts
37 Empezamos con el Layout. Creamos la carpeta AuthButton en auth/ con ello podremos acceder a autenticarnos o desautenticar.
38 Ahora vamos a construir la visualización de anuncios y vamos a utilizar la misma estructura que se ha utilizado en clase con los tweets.
39 Dentro de adverts/AdvertsPage creamos Advert.js, AdvertList.js, AdvertPage.js con los css correspondientes.
40 Creamos en api la llamada y gestión de adverts.
41 En Shared creamos Photo.js
42 Creanis el detalle en AdvertDetailPage.js cogiendo como muestra el ejercicio realizado en clase.
42 También hemos creado el AdertDetailPageHook que es lo mismo que la anterior pero en lugar de utilizar clases, hemos utilizado hooks.

