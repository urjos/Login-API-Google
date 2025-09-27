# Login‑API‑Google

Proyecto frontend en React + Google OAuth para login, con arquitectura de monorepo.  

---

## 🔍 Índice

- [Descripción](#descripción)  
- [Requisitos previos](#requisitos-previos)  
- [Instalación](#instalación)  
- [Variables de entorno / Credenciales de Google](#variables-de-entorno--credenciales-de-google)  
- [Estructura de Monorepo](#estructura-de-monorepo)  
- [Scripts útiles](#scripts‑útiles)  
- [Cómo usar / flujo de la aplicación](#cómo‑usar‑/‑flujo‑de‑la‑aplicación)  
- [Contribuir](#contribuir)  
- [Licencia](#licencia)

---

## 📓 Descripción

Este proyecto implementa un sistema de autenticación usando Google OAuth. Permite que los usuarios inicien sesión con su cuenta de Google, decodifica el JWT que provee Google, guarda ciertos datos (como `userId`, `username`, `token` y `picture`) en el contexto de sesión, y gestiona rutas protegidas basadas en si la sesión está iniciada o no.

---

## ⚙️ Requisitos previos

Antes de correr la aplicación, asegúrate de tener lo siguiente instalado:

- Node.js (versión LTS recomendable)  
- Un manejador de paquetes: `npm`, `yarn` o `pnpm`  
- Navegador moderno  
- Una cuenta de Google Cloud Console para configurar las credenciales de OAuth  

---

## 🛠 Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/urjos/Login-API-Google.git
    ```

2. Entra al directorio del proyecto:

    ```bash
    cd Login-API-Google
    ```

3. Instala dependencias:

    ```bash
    # si usas npm
    npm install

    # o con pnpm
    pnpm install

    # o yarn
    yarn
    ```

4. Configura las variables de entorno (ver sección siguiente).

5. Arranca el servidor en modo desarrollo:

    ```bash
    npm run dev // pnpm run dev
    ```

    o según el script que uses (`yarn dev`, `pnpm dev`, etc.)

---

## 🔐 Variables de entorno / Credenciales de Google

Para que la autenticación con Google OAuth funcione, necesitas crear unas credenciales en Google Cloud Console.

1. Entra a [Google Cloud Console](https://console.cloud.google.com)  
2. Crea un nuevo proyecto o usa uno existente.  
3. Habilita la API de OAuth / configuración de credenciales.  
4. Crea una **OAuth Client ID** tipo *Web application*.  
   - En *Authorized JavaScript origins* pon la URL de tu entorno local, ejemplo `http://localhost:5173`, `http://localhost`  Este es para React (o el puerto que uses).  
   - En *Authorized redirect URIs* configura según necesidad (si usas redirect), por ejemplo `http://localhost:5173`, `http://localhost` u otra ruta.  
5. Tomar el *Client ID* que te da Google.

Luego, en tu proyecto:

- Crear un archivo `.env` en la raíz del proyecto:  

    ```
    VITE_GOOGLE_CLIENT_ID=tu_client_id_de_google
    ```

- Asegúrate de que el `.env` esté en `.gitignore` para no subirlo al repositorio.  

- En el código React, usar `import.meta.env.VITE_GOOGLE_CLIENT_ID` para acceder al Client ID.

---

## 🏗 Estructura de Monorepo

El proyecto ya está organizado como un monorepo (workspaces) para separar módulos si fuere necesario. Aquí un esquema aproximado de carpetas:

```
Login-API-Google/
├── packages/
│   ├── frontend/      ← tu aplicación React
│   └── (otros paquetes si los agregas, ej: backend, librerías compartidas)
├── pnpm-workspace.yaml  ← define los workspaces (o similar si usas npm/yarn)
├── package.json
└── README.md
```

Si agregas más paquetes (por ejemplo, un backend o librería común), puedes ponerlos dentro de `packages/` y gestionarlos con workspaces.

---

## 🚀 Scripts útiles

Dentro del `package.json` del frontend deberías tener algunos scripts como:

| Comando | Descripción |
|---------|-------------|
| `dev` | Arranca la app en modo desarrollo |
| `build` | Empaqueta/compila la app para producción |
| `preview` | Verifica el build ya generado localmente |
| `lint` | Corre linter (si lo tienes configurado) |
| `format` | Corre formateo de código |

Ejemplo:

```bash
npm run dev
npm run build
```

---

## 📂 Cómo usar / Flujo de la aplicación

- Si no estás logueado, serás redirigido automáticamente al **login**.  
- Al hacer login con Google, se decodifica el JWT, se guarda en el contexto de sesión.  
- Las rutas protegidas solo se pueden ver si tienes sesión activa.  
- Logout limpia la sesión y redirige al login.  
- Algunas pantallas muestran avatar/imagen si la sesión incluye `picture`.

---

## 🤝 Contribuir

Si te interesa colaborar:

1. Haz un fork del repositorio.  
2. Crea una rama (`git checkout -b feature/nombre-de-la-rama`).  
3. Haz tus cambios.  
4. Haz commit y empuja tu rama.  
5. Abre un Pull Request describiendo qué has hecho.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT** (o la que prefieras).  

---
👤 Proyecto mantenido por: @urjos
