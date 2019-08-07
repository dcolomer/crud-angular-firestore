# CRUD Productos y Firebase - Cloud Firestore
> ### Aplicación en Angular v8.

### Acceso a la aplicación
Se accede a la aplicación mediante la URL http://localhost:4200/ 

## Capturas de pantalla
A continuación se muestran las capturas de pantalla más representativas de la aplicación.

### Login
Al iniciar la aplicación al usuario se le muestra un mensaje en el que se le indica que no se permite el acceso anónimo, que debe autenticarse mediante una cuenta de Google.

![Login](https://github.com/dcolomer/crud-angular-firestore/blob/master/screenshots/1.png)

### Usuario autenticado
Una vez autenticado, podrá ver en la barra de navegación su nombre, email y fotografía. Para abandonar la aplicación hay que pulsar sobre la fotografía y seleccionar la opción `Salir`.

![navbar](https://github.com/dcolomer/crud-angular-firestore/blob/master/screenshots/2.png)


### Alta/Modificación de productos
La aplicación solo consta de una página en la que se muestran dos funcionalidades, cada una en una ventana:
- En una ventana el usuario realiza el alta/modificacion de productos
- En la otra ventana se lleva a cabo el listado y el borradado de productos

Por defecto solo está visible la ventana de alta/modificacion de productos. Para mostrar la ventana del listado, el usuario tiene que pulsar el botón `Mostrar productos`.

La siguiente figura muestra la ventana de alta/modificacion de productos, la cual siempre permanece visible. En este caso el usuario ha introducido un nuevo producto, su precio y ha pulsado el botón `Guardar`, lo cual ha creado una nueva entrada en la base de datos `Firebase`. Como todo ha ido bien, el sistema muestra una notificación informando de ese hecho, en la parte inferior derecha de la pantalla.

![Alta y Modificacion](https://github.com/dcolomer/crud-angular-firestore/blob/master/screenshots/3.png)

### Listado de productos
La siguiente imagen muestra las dos ventanas: la que se ha comentado anteriormente y la ventana de listado y el borradado de productos. Nótese que la tabla que lista los productos tiene una altura fija establecida, a partir de la cual se produce un scroll vertical para que el usuario siempre pueda ver todos los productos existentes.

![Listado de productos](https://github.com/dcolomer/crud-angular-firestore/blob/master/screenshots/4.png)

### Modificación de productos
Para modificar un producto hay que pulsar el botón amarillo en la fila correspondiente a ese producto. Esto causa que los datos a modificar se muestre en la ventana de Alta/Modificación de productos, en la que podemos cambiar los valores actuales del mismo y luego pulsar el botón `Guardar`.

![Modificacion de productos](https://github.com/dcolomer/crud-angular-firestore/blob/master/screenshots/5.png)

### Borrado de productos
Para eliminar un producto hay que pulsar el botón rojo en la fila correspondiente a ese producto. Aparecerá un cuadro de diálogo pidiendo confirmación.

![Borrado de productos](https://github.com/dcolomer/crud-angular-firestore/blob/master/screenshots/6.png)

Si confirmamos la eliminación, por unos segundos se mostrará una notificación en la parte inferior derecha de la pantalla

![Confirmacion borrado](https://github.com/dcolomer/crud-angular-firestore/blob/master/screenshots/7.png)

### Base de datos Firebase
La aplicación utiliza una base de datos Firebase, muy sencilla, tal y como se puede apreciar en la siguiente figura:

![Listado de productos](https://github.com/dcolomer/crud-angular-firestore/blob/master/screenshots/8.png)

Características de Angular aplicadas a este programa:
- Uso de servicios Firebase - Cloud Firestore para el acceso a datos
- Autenticación de Firebase basada en cuentas de Google
- Compartir información entre componentes mediante @Input() y @Output()
- Gestión de datos asíncronos. Observables
- Bootstrap 4: cards, navbar, table
- Librerías para notificaciones y cuadros de diálogo, respectivamente, Toastr y SweetAlert2

## Instalación
Ejecutar `mpm install` para descargar las librerías de node.

**Importante: Para probar la aplicación debes crearte tu propia BD (aplicación)  en Firebase - Cloud Firestore -, copiar los datos de configuración que te proporcionen (apiKey, Domain, etc) y reemplazarlos por lo datos `fake` del fichero `app.module.ts`**
