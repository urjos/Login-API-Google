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
4. Crea una **OAuth Client ID** tipo _Web application_.
   - En _Authorized JavaScript origins_ pon la URL de tu entorno local, ejemplo `http://localhost:5173`, `http://localhost` Este es para React (o el puerto que uses).
   - En _Authorized redirect URIs_ configura según necesidad (si usas redirect), por ejemplo `http://localhost:5173`, `http://localhost` u otra ruta.
5. Tomar el _Client ID_ que te da Google.

Luego, en tu proyecto:

Este proyecto requiere dos archivos de entorno, uno para el frontend y otro para el backend.

#### Frontend

Crea un archivo `.env` dentro de la carpeta `packages/frontend/`:

```env
# packages/frontend/.env
VITE_GOOGLE_CLIENT_ID=tu_client_id_de_google
```

La aplicación de React usará `import.meta.env.VITE_GOOGLE_CLIENT_ID` para acceder a esta clave.

#### Backend

Crea un archivo `.env` dentro de la carpeta `packages/backend/`:

```env
# packages/backend/.env

# Google Client ID (debe ser el mismo que en el frontend)
GOOGLE_CLIENT_ID=tu_client_id_de_google

# Secreto para firmar los JSON Web Tokens (JWT)
JWT_SECRET=genera_una_cadena_aleatoria_y_segura_aqui

# Credenciales de la base de datos MySQL
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña_de_bd
DB_DATABASE=nombre_de_tu_bd
DB_PORT=3306
```

> **Importante:** Asegúrate de que ambos archivos `.env` estén incluidos en tu `.gitignore` para no exponer tus credenciales en el repositorio.

---

## 🏗 Estructura de Monorepo

El proyecto está organizado como un monorepo usando `pnpm workspaces` para gestionar el frontend y el backend de forma independiente pero dentro del mismo repositorio.

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

| Comando   | Descripción                              |
| --------- | ---------------------------------------- |
| `dev`     | Arranca la app en modo desarrollo        |
| `build`   | Empaqueta/compila la app para producción |
| `preview` | Verifica el build ya generado localmente |
| `lint`    | Corre linter (si lo tienes configurado)  |
| `format`  | Corre formateo de código                 |

Ejemplo:

```bash
pnpm run dev
pnpm run build
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

## Login - view

<img width="1365" height="598" alt="image" src="https://github.com/user-attachments/assets/ac71f377-b6cf-419a-9e69-8aa7a0cf737a" />

## Home - view

<img width="1365" height="600" alt="image" src="https://github.com/user-attachments/assets/32f19eeb-af28-4959-9bce-ae652652cd5d" />

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT** (o la que prefieras).

---

👤 Proyecto mantenido por: @urjos
