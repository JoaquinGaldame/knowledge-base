# Terminología y Relaciones Causales de Defectos

> **Fuente primaria:** [TIA] §2.3 (pp. 20-23)
> **Fuente secundaria:** [FITZ] §2.3 (referencias a confiabilidad)

## 1. La importancia de una terminología precisa

Tian enfatiza que la correctitud (correctness) es el aspecto más importante de la calidad en sistemas críticos, y que para hablar de correctitud se necesita un vocabulario preciso [TIA].

> *"La clave para el aspecto de correctitud de la calidad del software es el concepto de **defecto**, **falla (failure)**, **fallo (fault)** y **error**."* [TIA]

**Advertencia sobre el término "bug":**
> *"El término 'bug' nunca está definido con precisión, como los diferentes aspectos de defectos definidos como errores, fallos y fallas. Algunas personas también han planteado objeciones morales o filosóficas al uso de 'bug' como una forma de evadir la responsabilidad por algo que las personas cometieron."* [TIA]

Por esta razón, Tian evita el uso de "bug", "debug" y "debugging" en su texto, prefiriendo términos más precisos [TIA].

---

## 2. Definiciones formales (IEEE Standard 610.12)

Tian cita explícitamente las definiciones del estándar IEEE [TIA]:

### 2.1. Falla (Failure)

> *"La **falla** es la incapacidad de un sistema o componente de realizar sus funciones requeridas dentro de las especificaciones de rendimiento requeridas."*

**Características:**
- Es un **comportamiento observable** durante la ejecución.
- Es una **desviación** del comportamiento esperado.
- Es el **síntoma externo** del problema.

**Ejemplo (inferido):** Un sistema de nóminas que calcula incorrectamente el impuesto a la renta para un empleado específico. El usuario observa que el monto es incorrecto → eso es una falla.

### 2.2. Fallo (Fault)

> *"El **fallo** es un paso, proceso o definición de datos incorrecto en un programa de computadora."*

**Características:**
- Es una **condición interna** en el software.
- No es directamente observable por el usuario.
- Es la **causa técnica** que puede provocar una o más fallas.

**Ejemplo (inferido):** Una línea de código que usa el operador `+` en lugar de `-` al calcular el impuesto. Ese es un fallo. Solo cuando se ejecuta esa línea con ciertos datos, se produce la falla observable.

### 2.3. Error

> *"El **error** es una acción humana que produce un resultado incorrecto."*

**Características:**
- Es una **acción humana** (no una condición del software).
- Es la **causa raíz** en el comportamiento del desarrollador.
- El error antecede al fallo.

**Ejemplo (inferido):** Un programador malinterpreta la fórmula del impuesto y escribe el código incorrecto. Esa mala interpretación es el error.

---

## 3. Relación causal: Error → Fallo → Falla

Tian establece explícitamente la relación causal entre estos tres conceptos [TIA]:

> *"Existe una relación causal entre estos tres aspectos de los defectos:*
> 
> \[ \text{error} \rightarrow \text{fallo} \rightarrow \text{falla} \]
> 
> *Es decir, los errores pueden causar que se inyecten fallos en el software, y los fallos pueden causar fallas cuando el software se ejecuta."*

### 3.1. Relaciones no necesariamente 1 a 1

Tian enfatiza que esta relación **no es necesariamente biunívoca** [TIA]:

| Relación | Explicación |
|----------|-------------|
| Un error → múltiples fallos | Un algoritmo incorrecto aplicado en múltiples módulos. |
| Múltiples errores → un fallo | Un fallo puede ser causado por diferentes errores (ej., diferentes malentendidos que llevan al mismo código incorrecto). |
| Un fallo → múltiples fallas | Un mismo fallo puede causar fallas repetidas en cada ejecución que active ese camino. |
| Múltiples fallos → una falla | Una falla de interfaz puede involucrar múltiples módulos, cada uno con su propio fallo. |

### 3.2. Fallos latentes (dormant/latent faults)

Tian introduce el concepto de **fallos latentes** [TIA]:

> *"A veces, una fuente de error, como e5, puede no causar ninguna inyección de fallo, y un fallo, como f4, puede no causar ninguna falla, bajo las circunstancias o escenarios dados. Estos fallos se denominan típicamente **fallos latentes**, que aún pueden causar problemas bajo un conjunto diferente de escenarios o circunstancias."* [TIA]

**Implicación práctica:** La ausencia de fallas observadas no implica ausencia de fallos. Puede haber fallos latentes que solo se activen bajo condiciones específicas (y quizás raras).

---

## 4. Representación gráfica de la relación causal

Tian describe una figura (Figura 2.1 en su documento) que ilustra estas relaciones [TIA]:

**Elementos del diagrama (según descripción textual):**

| Elemento | Representación |
|----------|----------------|
| **Caja izquierda** | Fuentes de error (modelos conceptuales, conocimiento de desarrolladores, componentes reutilizables). Contiene círculos que representan fuentes de error (e1, e2, e3...). |
| **Caja central** | Artefactos de software (código, diseños, especificaciones). Contiene círculos que representan fallos (f1, f2, f3...). |
| **Caja derecha** | Escenarios de uso y resultados de ejecución. Contiene círculos que representan fallas observadas. |

**Relaciones ilustradas:**
- Flechas desde fuentes de error hacia fallos: inyección de fallos.
- Flechas desde fallos hacia fallas: activación de fallos en ejecución.

**Ejemplo concreto de Tian:**
> *"La fuente de error e3 causa múltiples fallos, f2 y f3. El fallo f1 es causado por múltiples fuentes de error, e1 y e2. A veces, una fuente de error, como e5, puede no causar ninguna inyección de fallo, y un fallo, como f4, puede no causar ninguna falla, bajo las circunstancias o escenarios dados."* [TIA]

---

## 5. Propiedades y mediciones centradas en la correctitud

Tian propone una clasificación de propiedades según la vista (externa/interna) y el atributo (correctitud/otros) [TIA]:

| Vista | Atributo: Correctitud | Atributo: Otros (-ilities) |
|-------|----------------------|---------------------------|
| **Consumidor / Externa** | Propiedades relacionadas con fallas (failure-related properties) | Usabilidad, Mantenibilidad, Portabilidad, Rendimiento, Instalabilidad, Legibilidad |
| **Productor / Interna** | Propiedades relacionadas con fallos (fault-related properties) | Diseño, Tamaño, Cambio, Complejidad |

### 5.1. Propiedades relacionadas con fallas (visión del consumidor)

Tian enumera las siguientes propiedades medibles desde la perspectiva del consumidor [TIA]:

| Propiedad | Descripción |
|-----------|-------------|
| **Propiedades de fallas y medición directa de fallas** | Información sobre fallas específicas: qué son, cómo ocurren, recuento, distribución, densidad. |
| **Probabilidad de fallas y medición de confiabilidad** | Probabilidad de operación sin fallas durante un período específico o para un conjunto dado de entrada (Musa et al., 1987; Lyu, 1995a; Tian, 1998). |
| **Severidad de fallas y aseguramiento de seguridad** | Impacto de las fallas, especialmente cuando el daño puede ser sustancial. Los **accidentes** se definen como fallas con consecuencias severas. |

### 5.2. Propiedades relacionadas con fallos (visión del productor)

Tian enumera las siguientes propiedades medibles desde la perspectiva del productor [TIA]:

| Propiedad | Descripción |
|-----------|-------------|
| **Análisis de fallos individuales** | Tipos de fallos, relaciones con fallas y accidentes específicos, causas, momento y circunstancias de inyección. |
| **Análisis colectivo de fallos** | Distribución y densidad de fallos a lo largo de las fases de desarrollo y entre diferentes componentes de software. |

---

## 6. Accidente (Accident)

Tian define un concepto adicional para las fallas más graves [TIA]:

> *"Los **accidentes**, que se definen como fallas con consecuencias severas, deben evitarse, contenerse o manejarse para garantizar la seguridad del personal involucrado y minimizar otros daños."*

**Implicación:** No todas las fallas son iguales. La gestión de calidad debe priorizar la prevención de accidentes (fallas severas) sobre fallas menores.

---

## Preguntas de integración (estudio activo)

1. Según el IEEE Standard 610.12, ¿cuál es la diferencia entre **fallo (fault)** y **falla (failure)**?
2. ¿Por qué Tian evita el uso del término **"bug"** y cuáles son las razones explícitas que da?
3. Escribe la **relación causal** entre error, fallo y falla en notación de flechas.
4. Pon un ejemplo concreto de un **error** (acción humana), el **fallo** que inyecta en el código, y la **falla** observable que puede producir.
5. ¿Qué es un **fallo latente** y por qué es peligroso?
6. ¿Qué diferencia hay entre un **accidente** y una falla ordinaria?
7. Desde la **visión del consumidor**, ¿qué propiedades relacionadas con fallas se pueden medir?