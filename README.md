# Formulario con React

## Descripción del Proyecto

Proyecto grupal realizado por Andrés Velásquez y Andrea Rosero, donde validamos conocimientos de Estado de los componentes y eventos en React + Vite

### :scroll: Contexto :scroll:
Un cliente nos solicita una aplicación en React que permita al usuario validar un formulario de registro utilizando los eventos onChange y onSubmit.


## Sobre el proyecto 🚀


### ✨ Requerimientos ✨

👌 1. Crea al menos 4 componentes, Registro, SocialButton, Formulario y Alert, donde el componente Registro importa todos los demás componentes

👌 2. En el componente Registro, se debe importar el componente SocialButton, para mostrar los botones de redes sociales.
  - El icono se debe enviar mediante props desde el componente Registro.

👌 3. El componente Formulario debe tener un formulario con un campo para el nombre, email, contraseña y otro para la confirmación de la contraseña del usuario.
  - Además, deberás almacenar los estados de los inputs a través de useState y relacionarlos con el evento onChange.

👌 4. Dentro del mismo componente Formulario se debe incluir un botón para procesar el formulario.
  - El botón debe validar mediante el evento onSubmit que el email tenga su formato correcto, y que las contraseñas sean iguales.

👌 5. Luego de presionar el botón para registrarse, el componente Alert debe mostrar un mensaje indicando al usuario si el registro fue exitoso o si los campos se encuentran vacíos.
  - Utiliza los props para mostrar un mensaje de error o de éxito.
  - Opcionalmente, puedes utilizar otro props para cambiar el color de la alerta (success o danger) según corresponda.
  - Como recordatorio, debes tener un state en el componente App que almacene el mensaje de error o de éxito, y pasar mediante props al componente Alert y Registro.


### Prerrequisitos 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

 "dependencies": 
 - "@fortawesome/fontawesome-svg-core": "^6.5.2",
 - "@fortawesome/free-brands-svg-icons": "^6.5.2",
 - "@fortawesome/free-solid-svg-icons": "^6.5.2",
 - "@fortawesome/react-fontawesome": "^0.2.0",
 - "react": "^18.2.0",
 - "react-dom": "^18.2.0"

 "devDependencies": 
 - "vite": "^5.2.0"


### Instalación 🔧

 Instalo en terminal:
- npm init --yes
- npm i 
- npm run dev


## Visuales :mage_woman:

- Formulario en proyecto:

![FormularioReact](https://github.com/andreaendigital/react_estadosconformulario/assets/154395788/38fedee7-f1cb-437b-ba9e-e1e2415d5446)

- Validación de Formato de Email:

![FormularioValidacionEmail](https://github.com/andreaendigital/react_estadosconformulario/assets/154395788/24fd64dc-974b-4342-9123-0a4da5ba1b7f)


## Construido Con 🛠️

Explica qué tecnologías usaste para construir este proyecto. Aquí algunos ejemplos:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - El lenguaje utilizado
- [React](https://react.dev/)- React
- [Vite](https://vitejs.dev/guide/)- Vite
  

## Autores ⚡ 

- **Andrea Rosero** ⚡  - [Andrea Rosero](https://github.com/andreaendigital)
- **Andres Velásquez** ⚡  - [Andres Velásquez](https://github.com/Droopytex)
