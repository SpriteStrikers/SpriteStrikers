# 🛡️ Sprite Strikers | The Journey Chronicles

![Sprite Strikers Banner](https://images.unsplash.com/photo-1691506513931-4740e203d1a0?auto=format&fit=crop&q=80)

**Sprite Strikers** es un videojuego de cartas tácticas con alma de RPG clásico (D&D) y una estética pixel art artesanal. Esta plataforma web sirve como el nexo central para la comunidad, el registro de aventureros y el despliegue de las crónicas del reino.

## 🌿 Características del Portal
- **Adventurer's Log:** Sistema de feedback gamificado para que los jugadores reporten sus experiencias.
- **The Guild Hall:** Centro de operaciones para el reclutamiento de Beta Testers y reporte de "podredumbre" (bugs).
- **The Armory:** Sección de descargas multiplataforma (PC & Android).
- **Multi-idioma:** Soporte nativo para Inglés y Español (i18next).

## 🚀 Tecnologías Utilizadas

### Core
- **React 18** + **TypeScript** (Vite)
- **Tailwind CSS** (Estilizado de interfaz)
- **Framer Motion** (Animaciones fluidas y estados de transición)

### Backend & Herramientas
- **Supabase:** Base de datos en tiempo real y almacenamiento de evidencia (Storage).
- **Lucide React:** Set de iconos minimalistas.
- **Sonner:** Sistema de notificaciones (Toasts) personalizadas.

## 📁 Estructura del Proyecto (Arquitectura Moderna)

El proyecto sigue una estructura pragmática basada en la **Colocación (Colocation)** y **UI Primitives**:

```text
src/
├── app/
│   ├── components/       # Componentes de funcionalidad (Organismos)
│   └── ui/               # Componentes atómicos/base (Botones, Paneles)
├── lib/                  # Utilidades y configuración de Supabase            
├── i18n/                 # Configuración de localización
└── assets/               # Estilos globales y fuentes pixel
```

## Instalar dependencias:
```bash
npm install
```

## Variables de Entorno:
### Crea un archivo .env en la raíz y añade tus credenciales de Supabase:
```bash
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_anon_key
```
## Correr en desarrollo:
```bash
npm run dev
```

⚔️ Contribución y Feedback

Si encuentras un bug o tienes una visión para el futuro del bosque, puedes usar The Guild Hall directamente en la aplicación o abrir un Issue en este repositorio.

🍵 Offer Tribute

¿Te gusta lo que estamos construyendo? Considera apoyar el desarrollo invitando un café al alquimista:
[Support on Ko-fi](https://ko-fi.com/spritestrikers)

# Developed by Void Pulse Studios | 2026