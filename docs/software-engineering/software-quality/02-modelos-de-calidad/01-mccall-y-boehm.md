# Modelos Clásicos de Calidad: McCall (1977) y Boehm (1978)

> **Fuente primaria:** [FITZ] §2.2, §2.3
> **Fuente secundaria:** [BED] (tabla comparativa)

## 1. Contexto histórico de los modelos

A finales de la década de 1970, la ingeniería de software buscaba formas de **hacer mensurable la calidad**. Los modelos de McCall y Boehm representan los primeros intentos sistemáticos de descomponer la calidad en factores identificables y, potencialmente, cuantificables.

Fitzpatrick señala que "uno de los modelos [de calidad de software] más antiguos y más frecuentemente aplicados es el de McCall et al. (1979). Otros modelos como el de Murine & Carpenter (1984) o el de NEC (Azuma 1987) se derivan de él" [FITZ].

---

## 2. El modelo de McCall et al. (1976-1977)

### 2.1. Origen y patrocinio

El modelo fue desarrollado entre **1976 y 1977** por encargo de:

- **US Airforce Electronic System Division (ESD)**
- **Rome Air Development Centre (RADC)**
- **General Electric (GE)**

**Objetivo explícito del modelo:** "mejorar la calidad de los productos de software" y, fundamentalmente, "hacer que la calidad fuera medible" [FITZ].

### 2.2. Proceso de construcción del modelo

McCall comenzó identificando **55 características de calidad** que consideraba que tenían una influencia importante en la calidad. Por razones de simplicidad, redujo este conjunto a **11 factores** [FITZ].

### 2.3. Los 11 factores de calidad de McCall

| Nº | Factor original | Traducción | Clasificación (NCC) |
|----|----------------|------------|---------------------|
| 1 | Efficiency | Eficiencia | Externo |
| 2 | Integrity | Integridad | Externo |
| 3 | Reliability | Confiabilidad | Externo |
| 4 | Usability | Usabilidad | Externo |
| 5 | Accuracy | Exactitud/Correctitud | Externo |
| 6 | Maintainability | Mantenibilidad | Interno |
| 7 | Testability | Testeabilidad | Interno |
| 8 | Flexibility | Flexibilidad | Interno |
| 9 | Interface facility | Interoperabilidad | Interno |
| 10 | Re-usability | Reusabilidad | Interno |
| 11 | Transferability | Portabilidad | Interno |

### 2.4. Aplicación del modelo de McCall

Fitzpatrick documenta que el modelo de McCall se utiliza en Estados Unidos para **proyectos de gran envergadura** en los dominios [FITZ]:

- **Militar**
- **Espacial**
- **Público** (sector gubernamental)

### 2.5. Los factores según su visibilidad (externos vs. internos)

Fitzpatrick, basándose en una publicación del NCC (sin referencia citada), subdivide los factores en [FITZ]:

> *"La calidad externa es la calidad del producto terminado, la calidad tal como aparece al mundo exterior, cuando sale de la línea de montaje. La calidad interna es la calidad del producto mientras se está construyendo, mientras está en la línea de montaje."*

**Extendiendo esta visión:** los factores externos son claramente visibles para los usuarios finales, mientras que los factores internos se refieren a cuestiones técnicas internas del software.

### 2.6. Vigencia de los factores según Fitzpatrick (1996)

Fitzpatrick evalúa cada factor en el contexto de finales de los años 90:

> *"Verá cómo algunos de los factores de calidad siguen siendo tan frescos y relevantes hoy como lo eran en 1977. También verá cómo algunos son redundantes y se han integrado en otros factores para reflejar mejor la práctica moderna."* [FITZ]

| Factor | Evaluación de Fitzpatrick |
|--------|---------------------------|
| Eficiencia | La definición de 1977 ha cambiado sustancialmente con los avances tecnológicos. Nuevas consideraciones (comunicaciones, potencia de procesamiento) deben incluirse. |
| Integridad | Vigente, pero debe ampliarse para cubrir accesos inocentes de usuarios autorizados, no solo accesos ilegales. |
| Confiabilidad | La definición de McCall es inapropiada (confunde con mantenibilidad). Debe adoptarse la definición ingenieril. |
| Usabilidad | La definición de 1977 era adecuada para su contexto histórico (mainframes, usuarios entrenados). Hoy es insuficiente; han surgido subfactores como learnability, suitability, adaptability. |
| Exactitud | Sigue siendo relevante, pero a menudo es un "factor de lista de deseos" porque las especificaciones completas son raras. |
| Mantenibilidad | La definición es demasiado restrictiva (solo corrección de errores). Debe incluir mantenimiento adaptativo y perfectivo. |
| Testeabilidad | "La definición de testabilidad de McCall ha resistido el paso del tiempo y sigue siendo muy aplicable hoy en día." |
| Flexibilidad | "A lo largo de los años, a medida que la función de mantenimiento ha adquirido un nuevo significado, el factor de calidad de flexibilidad se ha fusionado con el mantenimiento." |
| Interface facility | Renombrado como "interoperabilidad". Sigue siendo relevante, especialmente con el auge de las comunicaciones en red. |
| Reusabilidad | Vigente. La paradoja económica (mayor costo inicial de desarrollo) sigue siendo un desafío. |
| Transferability | Renombrado como "portabilidad". Sigue siendo relevante, especialmente con la estandarización de SO y lenguajes. |

---

## 3. El modelo de Boehm (1978)

### 3.1. Origen

Barry Boehm, también conocido por su modelo de estimación de costos COCOMO, publicó su modelo de calidad de software en **1978**, un año después del modelo de McCall.

### 3.2. Factores de calidad según Boehm

Fitzpatrick señala que Boehm definió un **segundo conjunto de factores de calidad**. La tabla comparativa que proporciona es la siguiente [FITZ]:

| McCall et al. (1976-77) | Boehm (1978) |
|-------------------------|--------------|
| Efficiency | Usability, Efficiency |
| Integrity | Clarity, Reliability |
| Reliability | Modifiability, Modularity |
| Usability | Documentation |
| Accuracy | Resilience, Correctness |
| Maintainability | Validity, Maintainability |
| Re-usability | Portability |
| Testability | Interoperability |
| Flexibility | Understandability |
| Interface facility | Integrity |
| Transferability | Flexibility, Generality, Economy |

### 3.3. Características distintivas del modelo de Boehm

A diferencia del modelo de McCall (que presenta una lista plana de 11 factores), el modelo de Boehm tiene una **estructura jerárquica** que Fitzpatrick no detalla completamente en el texto, pero que implica diferentes niveles de abstracción [inferido de la estructura de la tabla].

Factores adicionales introducidos por Boehm que no están explícitamente en McCall:
- **Clarity** (claridad)
- **Modularity** (modularidad)
- **Documentation** (documentación)
- **Resilience** (resiliencia)
- **Validity** (validez)
- **Generality** (generalidad)
- **Economy** (economía)

---

## 4. Comparación entre McCall y Boehm

| Criterio | McCall | Boehm |
|----------|--------|-------|
| Año | 1976-1977 | 1978 |
| Patrocinio | USAF, RADC, GE | No especificado |
| Número de factores | 11 (lista plana) | Múltiples (estructura jerárquica) |
| Enfoque principal | Hacer la calidad medible | Relaciones entre factores y economía |
| Aplicación típica | Proyectos militares, espaciales, públicos | Académica / Investigación |
| Derivados | Murine & Carpenter (1984), NEC (1987) | - |

---

## 5. La evolución terminológica: los "...ility factors"

Fitzpatrick observa que, debido al formato utilizado para describirlos, "los factores de calidad a menudo se denominan **factores ...ilidad**" (the ...ility factors) [FITZ].

**Ejemplos:** reliability, usability, maintainability, testability, portability, interoperability.

Esta convención de nomenclatura se ha mantenido en modelos posteriores como ISO 9126.

---

## 6. Críticas generales a los modelos clásicos (Fitzpatrick)

Fitzpatrick formula una crítica explícita a ambos modelos [FITZ]:

> *"Uno de los problemas con los modelos de calidad de software es que se publicaron en 1977/78 y en los años intermedios se han producido enormes avances tecnológicos. En este documento se han destacado algunos de ellos. Quizás sea necesario revisar más de ellos para reflejar mejor esos cambios. Quizás también se necesiten algunas adiciones nuevas."*

**Limitaciones específicas señaladas:**
1. No reflejan el impacto de la **microcomputadora** (PC) y la computación de escritorio.
2. No consideran adecuadamente la **interacción humano-computadora (HCI)** como área propia.
3. Algunos factores han quedado obsoletos o necesitan redefinición (eficiencia, usabilidad, mantenibilidad).
4. "También es extraordinario que tan pocos de los factores de calidad reciban alguna mención en las normas internacionales y nacionales relacionadas con el aseguramiento de la calidad" [FITZ].

---

## Preguntas de integración (estudio activo)

1. ¿Cuál era el **objetivo explícito** del modelo de McCall y quiénes lo patrocinaron?
2. ¿De cuántas características de calidad partió McCall y a cuántos factores las redujo?
3. ¿Cuál es la diferencia fundamental entre **factores externos** y **factores internos** según la clasificación NCC?
4. Según Fitzpatrick, ¿qué factores de McCall han sido **renombrados** y a qué términos modernos?
5. ¿Qué factor de McCall es el único que Fitzpatrick considera que "ha resistido el paso del tiempo" sin cambios sustanciales?
6. ¿Qué factores introduce Boehm que no están explícitamente en el modelo de McCall?
7. ¿Cuál es la crítica principal de Fitzpatrick a los modelos de McCall y Boehm en relación con los avances tecnológicos?