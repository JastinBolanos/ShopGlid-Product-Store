# 🌐 ShopGlid - Marroquinería de Autor & Atelier Digital de Piel (v1.0.0-PROD)

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Deployment](https://img.shields.io/badge/deployment-production-blue)
![Version](https://img.shields.io/badge/version-1.0.0--PROD-orange)
![Security](https://img.shields.io/badge/security-TLS_1.3-success)

> **Boutique Digital y Catálogo de Marroquinería Artesanal.**  
> Plataforma de comercio electrónico concebida con esmero para la curaduría, descubrimiento y adquisición de piezas exclusivas de marroquinería de *ShopGlid*: carteras elegantes, morrales urbanos ergonómicos y billeteras de perfil ultradelgado en piel legítima. El sistema combina una experiencia visual sobria, accesible y minimalista con fichas técnicas detalladas de materiales, selector interactivo de tonalidades de piel y un flujo de compra fluido y transparente.

🌍 **[Ver Plataforma en Vivo (Producción) 🟢]** [aca va el link]

![Vista Previa de ShopGlid Boutique]([aca va el link])

---

## 🎥 Demostración de la Experiencia en Tiempo Real

**🎬 Exploración de Colecciones y Experiencia de Compra**  
Demostración de la interfaz de la tienda: navegación fluida por categorías de marroquinería (carteras, morrales y billeteras), filtrado instantáneo por texto y rango de precio, inspección detallada de especificaciones de confección artesanal, selección interactiva de colores y gestión reactiva de la bolsa de compra con cálculo automático de envío gratuito.

[aca va el link]

---

## 🏗️ Arquitectura de Sistema y Stack Tecnológico

Desarrollada con un enfoque honesto, limpio y profesional hacia la ingeniería de software moderna, esta plataforma fue edificada desde cero priorizando la rapidez en la respuesta visual, la claridad en la navegación para el usuario y la fiabilidad de cada interacción. Nos aseguramos de mantener una separación estricta entre la capa de presentación visual, el catálogo de productos y el estado global de la sesión de compra.

- **Core & Runtime (Optimizado para la Web Moderna):**
  - `react` (`^19.0.1`) & `react-dom` para una interfaz de usuario reactiva, fluida y con renders optimizados.
  - `typescript` (`~5.8.2`) con tipado estricto para modelos de productos, atributos de piel, variantes de color y transacciones del carrito.
  - `vite` (`^6.2.3`) como empaquetador ultrarrápido con arranque casi instantáneo y compilación de producción optimizada.
  - `react-router-dom` (`^7.18.3`) para un enrutamiento declarativo del lado del cliente sin parpadeos ni recargas de página.

- **Interfaz de Usuario (UI) & Estilizado:**
  - `tailwindcss` (`^4.1.14`) utilizando un diseño contemporáneo basado en paletas neutras de tonos piedra y carbón, contrastes confortables y espaciados armónicos.
  - `lucide-react` (`^0.546.0`) para iconografía funcional, consistente y de trazos finos.
  - `motion` (`^12.23.24`) para animaciones sutiles y respetuosas en transiciones de navegación, apertura del cajón lateral y retroalimentación de botones de compra.

- **Estado Global & Persistencia:**
  - `CartContext` con API nativa de Context de React y sincronización automática bidireccional en `localStorage`, garantizando que la cesta de compra del cliente perdure de forma confiable entre sesiones o ante cualquier recarga accidental de la ventana.

- **Servicio y Rendimiento de Medios:**
  - Optimización local de fotografías de producto con compresión adaptada para minimizar la huella de ancho de banda y garantizar tiempos de carga inmediatos.

---

## 🚀 Módulos Operativos (Desplegados)

1. **👜 Catálogo Curado & Explorador Multicategoría (`HomePage` / `ProductGridCard`)**
   - Filtrado dinámico instantáneo por las tres categorías cardinales: **Carteras**, **Morrales** y **Billeteras**.
   - Búsqueda en tiempo real por palabras clave, acabados de piel, estilo y denominación de producto.
   - Ordenamiento flexible por precio ascendente/descendente y relevancia alfabética.
   - Indicadores visuales de paleta de colores disponibles y etiquetas destacadas (*Favorito*, *Nuevo*, *Popular*).

2. **🔍 Ficha de Detalle de Producto & Especificaciones de Confección (`ProductDetailPage`)**
   - Exhibición fotográfica nítida con tratamiento de imagen centrado en texturas y detalles de los materiales.
   - Selector interactivo de colores de cuero (Borgoña, Negro Carbón, Camel Claro, etc.) con selección activa.
   - Lista detallada de características técnicas: tipo de curtido, dimensiones milimétricas, capacidad en litros y compartimentos de seguridad (cierres ocultos y protección RFID).
   - Módulo de recomendaciones automáticas con productos complementarios de la misma colección.

3. **🛍️ Bolsa de Compras & Gestor de Orden (`CartPage` / `CartContext`)**
   - Control cuantitativo reactivo: adición, sustracción y remoción de artículos en un solo clic.
   - Indicador visual del umbral de envío gratuito (pedidos superiores a 50 €).
   - Motor de cupones de descuento interactivo (con soporte para códigos promocionales como `BIENVENIDA10`).
   - Resumen financiero claro y transparente desglosando subtotal, impuestos y descuento aplicado.
   - Formulario de finalización de compra con validación de datos de entrega y pantalla de confirmación de pedido.

4. **👤 Centro de Perfil & Preferencias del Cliente (`ProfilePage` / `ProfileSubSectionPage`)**
   - Panel de consulta de pedidos anteriores con fechas y estado de entrega.
   - Gestión de libretas de direcciones guardadas para envíos recurrentes.
   - Configuración de métodos de pago preferidos y opciones de privacidad de cuenta.

5. **📱 Navegación Responsiva & Menú Deslizante (`Header` / `SidebarDrawer`)**
   - Barra superior minimalista con insignia de contador de carrito en tiempo real.
   - Cajón lateral optimizado para dispositivos móviles y pantallas táctiles con enlaces directos a categorías y perfil.

---

## 💻 Guía de Despliegue y Ejecución (Entorno Local)

Para cualquier desarrollador, diseñador o colaborador que desee auditar, revisar o poner en marcha el proyecto en su máquina local:

### 1. Clonar el repositorio y preparar entorno
```bash
git clone [aca va el link]
cd shopglid
```

### 2. Instalación de dependencias (Node.js v18+)
```bash
npm install
```

### 3. Configuración de Entorno (Environment)
Clona el archivo de configuración base para configurar cualquier variable de entorno requerida por la aplicación:
```bash
cp .env.example .env
```

### 4. Iniciar el servidor local de desarrollo
```bash
npm run dev
```
La terminal indicará la dirección local habilitada (por defecto `http://localhost:3000`).

### 5. Compilación y Verificación para Producción (CI/CD Pipeline)
Para comprobar el tipado con TypeScript y generar el paquete estático ultraoptimizado listo para el CDN o servidor:
```bash
npm run lint
npm run build
```

---

*Proyecto desarrollado con dedicación artesanal, buenas prácticas de desarrollo web y respeto por el usuario.*  
**ShopGlid Atelier © 2026. Todos los derechos reservados.**
