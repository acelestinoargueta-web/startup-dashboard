# Xylence — Senior Frontend UI/UX Challenge


## Decisiones de diseño

El dashboard usa una paleta oscura de baja saturación (lo que ayuda a que no sea tan cansado para la vista) con un único acento interactivo (indigo apagado) y tres colores reservados exclusivamente para codificar datos: el score alto/medio/bajo y la dirección del trend. Ese color nunca se usa como decoración — si algo es verde en esta UI, significa "alta convicción", punto. Esto es deliberado dado el requisito de "bajo ruido visual": cada uso de color tiene que ganarse su lugar.

El indicador de conviction score es una **heatbar horizontal** en vez de un anillo o dot-pattern: para escanear 50 cards en 20 minutos, el color se lee antes que el número — el analista no tiene que "calcular" nada, el ojo capta la banda (rojo/naranja/verde) de reojo y es más fácil comparar los scores entre cards. El número exacto queda al lado por si necesita precisión.

La tipografía es **Work Sans**, ya que es simple y de fácil lectura, al ser sans serif es más ligera la lectura y simple para que sea identificable a simple vista. Se usaron diferentes pesos y tamaños de esta misma tipografía para establecer jerarquía visual.

Los filtros son chips toggleables siempre visibles, no un dropdown — con 30+ escaneos diarios, evitar el costo de abrir/cerrar un menú importa más que ahorrar espacio vertical.

**Íconos:** uso lucide-react (permitido explícitamente en el brief) solo para iconografía funcional (trend, buscar, expandir, limpiar) — nunca decorativos.

---

## Qué decidí NO construir y por qué

**Persistencia en URL.** Es genuinamente útil, pero con el tiempo disponible preferí pulir la base (skeleton fiel a la card real, catálogo derivado, arquitectura de estado limpia) antes que sumar un diferenciador más. Es lo primero que agregaría con más tiempo.
Animaciones de entrada. Una transición simple de hover/expand alcanza. Con datasets de 50+ cards, animar la entrada de cada una en cada cambio de filtro compite directamente con "velocidad de escaneo" — el objetivo #1 del usuario.

**Animaciones de entrada.** Una transición simple de hover/expand alcanza. Con datasets de 50+ cards, animar la entrada de cada una en cada cambio de filtro compite directamente con "velocidad de escaneo" — el objetivo #1 del usuario.

### Inconsistencias o rarezas que noté (y no "arreglé")

- **fundingAmount** es undefined en 2 de 17 startups (stp_07, stp_17) — lo muestro como "No revelado", no como $0, para no sugerir que la startup literalmente levantó cero dólares.

- stp_17 (Íntegra) tiene foundedYear: 2027 — año futuro respecto a hoy — y signals: []. El breakdown maneja el caso vacío con un mensaje explícito en vez de mostrar una sección en blanco.

- sector es un array, no un string único — una misma startup puede aparecer bajo varios sectores. El filtro de sector hace match si cualquiera de sus sectores está seleccionado.

### Qué haría diferente con más tiempo

- Persistir filtros/búsqueda/orden en query params de la URL.
- Tests adicionales.
- Búsqueda en tiempo real por nombre (con debounce).
- Empty state bien diseñado cuando los filtros no devuelven resultados.
- Animación de entrada de las cards al cargar o al cambiar filtros.
- Expandir una card para ver los ConvictionSignals como breakdown visual (por tipo: team / market / traction / product).
- Inlcuir el nombre de las startups en un header de cada card.
- Incluir un "Top 5" que se visualice en la parte superior del feed por separado que contemple las 5 startups que han tenido mejor score en la última semana.

---

## Cómo colaboré con IA

- Le pedí ayuda para establecer la arquitectura y tener una guía.
- Implementé Vibe Coding y personalicé o adapté lo que hacía falta.
- Me ayudó a corregir algunos errores para optimizar tiempo.
- Le pedí que me ayudara a establecer y analizar el mercado y la competencia.