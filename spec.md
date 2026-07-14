# spec.md — Build spec de la landing (Ana Rey)

> Documento maestro para Claude Code.
> Fuentes de verdad: `copy.md` (texto exacto) · `tokens.css` + `tokens.json` (sistema visual) · `assets/` (imágenes y capturas de referencia).
> Si algo en este spec contradice a `copy.md`, gana `copy.md` para el texto y `tokens.*` para lo visual.

---

## 0. Qué es esto y cómo se juzga

Esta web **no es un portfolio**. Es la mejor pieza del portfolio: la demostración viva de lo que Ana vende. Si el sitio es lento, genérico o desprolijo, el prospecto descarta todos los casos por buenos que sean.

**Métrica única de éxito:** que la persona termine escribiendo por WhatsApp.
Cada sección, animación y CTA se juzga con una sola pregunta: *¿esto acerca a la persona a mandar el mensaje?* Si no, se corta.

---

## 1. Posicionamiento (leer antes de construir)

Ana **no es una agencia de redes**. No vende producción de contenido.

Ana construye **infraestructura digital completa** para negocios de servicios y ecommerce: identidad y marca, web y tienda que convierten, campañas de Meta Ads, contenido, y automatización de procesos con agentes de IA. El contenido es **un módulo**, no el producto.

La tensión central que la marca resuelve: *abarca muchos servicios, pero NO es un menú desordenado — es UN sistema*. La disciplina visual (base sobria + un solo acento, siempre para lo mismo) es lo que comunica "acá hay orden y método" antes de que se lea una sola palabra.

**Villano de la narrativa:** el marketing suelto. El prospecto no es vago — hace mucho y no ve retorno. Corre en una cinta.
**Diferencial anti-agencia:** un solo interlocutor (Ana), y todo queda a nombre del cliente (web, cuentas, campañas, automatizaciones).

---

## 2. Stack y performance

- **Framework:** Next.js (App Router)
- **Estilos:** Tailwind CSS, configurado desde `tokens.json`
- **Variables CSS:** cargar `tokens.css` como fuente de verdad de color/tipografía
- **Animación:** Framer Motion
- **Deploy:** Vercel

**Presupuesto de performance (no negociable):** mobile-first, LCP < 2.5s en mobile, imágenes optimizadas y con carga diferida, sin animación que bloquee el render. La promesa de la marca es eficiencia: un sitio lento la contradice en el primer segundo.

---

## 3. Arquitectura narrativa (orden obligatorio)

La página mueve al visitante por estados, en este orden:

1. **Reconocimiento** (3s): "esta persona entiende MI problema". Se le habla a ELLOS, no de Ana todavía.
2. **Tensión:** el dolor exacto — hace todo y no ve retorno; el feed no muestra lo que el negocio vale; llegan consultas que se apagan sin comprar.
3. **Revelación:** el sistema. No son servicios sueltos: es una máquina que capta y atiende.
4. **Prueba:** casos con números **reales**.
5. **Fricción cero:** lo poco que le toca hacer al cliente.
6. **Acción:** WhatsApp.

---

## 4. Secciones (orden de construcción)

Texto exacto en `copy.md`. Acá va el **rol** y la **intención de animación** de cada bloque.

1. **Hero** — Promesa de resultado en 3s + CTA a WhatsApp. Una sola animación estrella que demuestre oficio (no adorno).
2. **El problema** — Espejo del cliente. Que se sienta leído antes de que le vendan nada. Reveals escalonados al scroll.
3. **El sistema (método)** — El diferencial: no son piezas sueltas, es una máquina conectada. La mejor animación explicativa del sitio.
4. **Los módulos** — Identidad · Web/tienda que convierte · Campañas · Contenido · Automatización con IA. Presentados como **beneficios**, no como tareas. Micro-interacciones en cards.
5. **La oferta y la garantía** — Promesa + entregables numerados + garantías. Ver §5.
6. **Casos** — Set curado de 2–3 casos (SoluRepuestos, Braszka Electrónica, +1). Ver §6.
7. **Cómo trabajamos** — El flujo narrado desde el esfuerzo del cliente (bajar el esfuerzo percibido). Stepper al scroll.
8. **Para quién es / para quién no** — Califica. Espanta curiosos, sube la confianza de los que encajan.
9. **Sobre mí** — Marca personal: primera persona, con foto. Corto, humano, creíble. Ancla anti-agencia.
10. **FAQ** — Desarma objeciones reales (ver `copy.md`). 6–7 preguntas máximo; más empieza a sonar defensivo.
11. **CTA final** — WhatsApp + escasez real (pocos clientes a la vez), nunca inventada.

---

## 5. Regla de la oferta y las garantías

**Principio rector:** Ana promete y garantiza **solo lo que controla al 100%**. Nada de "x% más ventas": el cierre depende también de la velocidad de respuesta y los precios del cliente.

Esa honestidad es un **activo, no una debilidad**: es lo que hace creíble la garantía y lo que la separa de las agencias que prometen magia. La sección de FAQ dice explícitamente dónde termina su responsabilidad. No suavizar ni borrar eso.

Las garantías se muestran con jerarquía visual fuerte (el acento de color trabaja acá).

---

## 6. Regla de los números (crítica)

**Todos los números publicados deben ser reales.** Los casos llevan nombre de empresas reales; cifras infladas o inventadas son un riesgo reputacional directo y contradicen el posicionamiento entero de la marca.

- Mientras falten datos, usar placeholders **obviamente falsos** (`00%`, `0.0s`, `— %`) que no puedan confundirse con datos reales, y **no publicar** hasta reemplazarlos.
- Formato preferido: **contraste antes → después** (ej. "8% → 0% de comisión"). Un contraste cuenta una historia; un número suelto no dice nada.
- Máximo **3 cifras por caso**. Tres se leen; seis son ruido.
- Las tres deben cubrir ángulos distintos: una de **plata**, una de **tiempo**, una **técnica**.
- Si falta un dato duro, reemplazarlo por un **testimonio textual del dueño** — nunca por una cifra estimada.

**Animación:** contadores que cuentan hacia arriba al entrar en viewport; el número "antes" en gris/tachado, el "después" en el acento.

---

## 7. Sistema de CTA por WhatsApp

Coherente con el propio método (WhatsApp-first):

- **Todos** los CTA abren WhatsApp con un mensaje **pre-cargado distinto según la sección de origen** (`wa.me/[número]?text=...`).
- Esto permite rastrear qué sección de la web convierte.
- Textos exactos de cada mensaje: ver `copy.md`.

---

## 8. Lógica de animación

Una animación entra **solo si** hace una de estas tres cosas: **demuestra oficio**, **dirige la atención**, o **explica el sistema**. Si solo decora, afuera.

- Reveals al scroll: sutiles, escalonados.
- Contadores en las métricas de los casos.
- Micro-interacciones en botones y cards.
- Respetar `prefers-reduced-motion`.
- **Prohibido:** parallax pesado, autoplay que trabe, cualquier cosa que retrase el contenido o penalice mobile.

---

## 9. Reglas de ejecución para Claude Code

1. **Sección por sección. No todo de una.** Empezar por el Hero, dejarlo impecable, después bajar.
2. **Commits chicos**, uno por sección.
3. **Las animaciones van al final de cada sección**, cuando estructura y estilo ya están firmes.
4. **Mobile-first**: revisar cada sección en viewport angosto antes de avanzar.
5. Cargar `tokens.css` / `tokens.json` como sistema visual. **Nunca hardcodear colores o fuentes sueltas.**
6. Usar las capturas de `assets/` como referencia visual, pero construir desde los tokens (no clonar píxeles).
7. Accesibilidad básica: contraste, foco visible, `alt` en imágenes, `prefers-reduced-motion`.
8. SEO básico: title, meta description, Open Graph con imagen.

---

## 10. Checklist antes de publicar

- [ ] Todos los números de los casos son reales (cero placeholders vivos)
- [ ] Los CTA abren WhatsApp con el mensaje correcto por sección
- [ ] Probado en celular real
- [ ] PageSpeed medido en mobile
- [ ] Foto, logo y material de casos cargados
