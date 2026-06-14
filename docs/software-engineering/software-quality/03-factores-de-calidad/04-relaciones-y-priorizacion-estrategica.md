# Relaciones y Priorización Estratégica de Factores de Calidad

> **Fuente primaria:** [FITZ] §2.5, §2.7
> **Fuente secundaria:** [TIA] §2.2

## 1. Interrelaciones entre factores de calidad

A lo largo del análisis de los factores individuales, Fitzpatrick observa que **ningún factor opera de forma aislada**. Existe un continuo *interplay* (interacción) entre ellos.

> *"Finalmente, verá que cada factor de calidad no es una condición aislada para ser buscada y evaluada por sí misma, y que en muchos casos hay una interacción y dependencia entre factores."* [FITZ]

### 1.1. El modelo de interrelaciones de Perry (1987)

Perry propuso un modelo explícito que clasifica las relaciones entre factores de calidad en tres tipos [FITZ]:

| Tipo de relación | Significado | Ejemplo (implícito del texto) |
|-----------------|-------------|-------------------------------|
| **Inversa** | Mejorar un factor empeora el otro | Confiabilidad vs. Eficiencia (mayor tolerancia a fallos puede reducir el rendimiento) |
| **Neutral** | No hay influencia significativa entre factores | Usabilidad vs. Portabilidad (no están directamente vinculados) |
| **Directa** | Mejorar un factor mejora el otro | Testabilidad y Confiabilidad (mejor testabilidad conduce a mejor confiabilidad) |

### 1.2. Ejemplos concretos de interrelaciones mencionados por Fitzpatrick

| Relación | Factores involucrados | Naturaleza de la interacción |
|----------|----------------------|------------------------------|
| **Confiabilidad ↔ Testabilidad ↔ Exactitud** | Confiabilidad, testabilidad, exactitud | La confiabilidad "tiene conexiones e implicaciones para los factores de calidad de exactitud y testabilidad" [FITZ] |
| **Usabilidad ↔ Mantenibilidad** | Usabilidad, mantenibilidad | En la evolución de los factores, la flexibilidad (originalmente separada) se ha fusionado con mantenibilidad, y la interpretación moderna de flexibilidad está más asociada a la adaptabilidad de la interfaz de usuario (usabilidad) [FITZ] |
| **Reusabilidad ↔ Eficiencia** | Reusabilidad, eficiencia | "Cuando se escribe código para reutilización, los programadores también deben ser conscientes del uso económico del código para cumplir con el factor de calidad de eficiencia" [FITZ] |

---

## 2. Priorización de factores de calidad

No todos los factores de calidad tienen la misma importancia en todas las circunstancias. Fitzpatrick explora dos dimensiones de priorización: una **estratégica para la evaluación** y otra **basada en el dominio de aplicación**.

### 2.1. La priorización de Daily (1992) y Ghezzi et al. (1991)

Estos autores sugieren que existe **un orden de secuencia y prioridad** que debe aplicarse a los factores de calidad [FITZ].

> *"Daily sugiere que 'una vez que el software es utilizable (usable), correcto y confiable, entonces se pueden considerar con más detalle la eficiencia, la compatibilidad (interoperabilidad) y la integridad'."* [FITZ]

#### La jerarquía implícita de prioridad

| Nivel de prioridad | Factores | Justificación |
|--------------------|----------|---------------|
| **Primer filtro** | Usabilidad | Si un producto de software no se puede cargar, no se puede iniciar y, por lo tanto, **no se puede usar**. En consecuencia, otros aspectos de calidad no entran en juego. |
| **Segundo nivel** | Correctitud, Confiabilidad | Una vez que el software es usable, debe hacer lo que se supone que debe hacer (correctitud) y hacerlo de manera consistente en el tiempo (confiabilidad). |
| **Tercer nivel** | Eficiencia, Interoperabilidad, Integridad | Una vez que las condiciones básicas están satisfechas, se pueden optimizar estos aspectos. |

### 2.2. Advertencia crucial de Fitzpatrick

Fitzpatrick enfatiza que esta priorización **solo es válida para la estrategia de evaluación**, no para la estrategia de construcción.

> *"Sin embargo, sería muy importante que esta prioridad se limitara a una **estrategia de evaluación** solamente. Una estrategia para construir estos factores de calidad en un producto debe tratar todos los factores por igual y hacerlo en la etapa de especificación de requisitos."* [FITZ]

**Implicación práctica:** Durante la especificación de requisitos, todos los factores de calidad relevantes deben considerarse desde el principio. La priorización solo ocurre en el momento de **evaluar** productos existentes, cuando se deben hacer trade-offs.

### 2.3. Priorización según dominio de aplicación (Tian)

Tian proporciona una priorización explícita según el dominio [TIA §2.2]:

| Dominio de aplicación | Factores prioritarios | Factores secundarios |
|----------------------|----------------------|---------------------|
| **Sistemas de tiempo real** | Rendimiento (eficiencia), Confiabilidad | Usabilidad, Mantenibilidad |
| **Productos de mercado masivo** | Usabilidad, Novedad de características | Correctitud (sigue siendo fundamental, pero no siempre la máxima prioridad) |
| **Aplicaciones web** | Confiabilidad, Usabilidad, Seguridad (primarios); Disponibilidad, Escalabilidad, Mantenibilidad, Tiempo de comercialización (secundarios) | - |

---

## 3. La centralidad de la usabilidad como filtro inicial

Fitzpatrick dedica una atención especial al papel de la usabilidad como **factor crítico de primer orden**. Esto se basa tanto en la priorización de Daily como en la creciente importancia de la interacción humano-computadora (HCI).

### 3.1. La tesis de Daily

> *"Si un producto de software no se puede cargar, no se puede iniciar y, por lo tanto, no se puede usar."* [FITZ]

### 3.2. Implicación para el aseguramiento de la calidad

Cuando un cliente o un evaluador se enfrenta a múltiples productos candidatos, la usabilidad actúa como **un filtro de entrada**: los productos que no son utilizables quedan eliminados antes de que se examinen otros factores como la confiabilidad o la eficiencia.

Esto no significa que la usabilidad sea el factor *más importante* en términos absolutos, sino que es **el primero en manifestarse** durante la interacción del usuario con el sistema.

---

## 4. Trade-offs documentados entre factores

Aunque Fitzpatrick no proporciona una tabla exhaustiva, los trade-offs pueden inferirse de sus comentarios y de la literatura complementaria:

| Trade-off | Naturaleza | Fuente implícita |
|-----------|------------|------------------|
| **Confiabilidad vs. Eficiencia** | Inversa | La tolerancia a fallos (redundancia, comprobaciones) consume recursos y puede reducir el rendimiento. |
| **Reusabilidad vs. Costo de desarrollo** | Inversa | Desarrollar código reutilizable es más costoso y lento inicialmente. |
| **Mantenibilidad vs. Eficiencia** | Potencialmente inversa | Un código altamente modular y desacoplado puede introducir sobrecarga en las llamadas entre módulos. |
| **Usabilidad vs. Seguridad** | Potencialmente inversa | Interfaces muy amigables pueden exponer más superficie de ataque (ej., asistentes automáticos que omiten controles de seguridad). |

---

## 5. Conclusión del módulo de factores de calidad

Los factores de calidad no son independientes. Existen **relaciones sistemáticas** (inversas, directas, neutrales) que deben ser comprendidas por el ingeniero de calidad. La **priorización** depende del contexto de uso (evaluación vs. construcción, dominio de aplicación). Sin embargo, existe un consenso emergente en que la **usabilidad** actúa como un filtro inicial crítico, mientras que la **correctitud y confiabilidad** constituyen la base sobre la que se construyen otros atributos.

---

## Preguntas de integración (estudio activo)

1. ¿Cuáles son los **tres tipos de relaciones** entre factores de calidad según Perry?
2. Según la priorización de Daily, ¿qué factores deben considerarse **antes** que la eficiencia y la interoperabilidad?
3. ¿Por qué Fitzpatrick enfatiza que la priorización de Daily **solo se aplica a la evaluación** y no a la construcción del software?
4. En un sistema de **tiempo real** (ej., control de un motor), ¿qué factores serían prioritarios y cuáles secundarios según Tian?
5. ¿Qué trade-off existe entre **reusabilidad** y **costo de desarrollo** según Fitzpatrick?
6. ¿Puede la usabilidad estar en conflicto con la seguridad? Justifica tu respuesta con un ejemplo.