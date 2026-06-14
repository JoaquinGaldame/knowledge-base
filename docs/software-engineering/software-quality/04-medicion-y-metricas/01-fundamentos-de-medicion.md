# Fundamentos de Medición de Calidad de Software

> **Fuente primaria:** [FITZ] §2.6
> **Fuente secundaria:** [TIA] §2.3, [BED] §2

## 1. La necesidad de medir la calidad

Uno de los objetivos explícitos del modelo de McCall (1977) era "hacer que la calidad fuera **medible**" [FITZ]. Sin embargo, la medición de la calidad de software presenta desafíos significativos que no existen en la manufactura física.

Bedini señala un mito común en la ingeniería de software [BED]:

> *"La calidad de software no se puede medir. Si no medimos la calidad de nuestros productos, solamente podemos entender vagamente que tan bueno o malo son."*

La posición contraria (adoptada por los autores de los documentos fuente) es que **la calidad sí puede medirse**, aunque sea de forma indirecta o mediante aproximaciones.

---

## 2. Medición directa vs. indirecta

Tian introduce la distinción fundamental entre medición directa e indirecta en el contexto de la calidad [TIA]:

| Tipo de medición | Definición | Ejemplo en calidad de software |
|------------------|------------|-------------------------------|
| **Medición directa** | Se mide la propiedad de interés sin intermediarios. | Número de fallas observadas durante un período de prueba. |
| **Medición indirecta** | Se mide una propiedad sustituta que se correlaciona con la propiedad de interés. | Complejidad ciclomática (como indicador de mantenibilidad). |

**Implicación práctica:** Los atributos de calidad externa (confiabilidad, usabilidad) a menudo requieren medición indirecta a través de atributos internos (complejidad, tamaño, acoplamiento).

---

## 3. Métricas fundamentales de calidad

### 3.1. Métricas de confiabilidad (Fitzpatrick)

Fitzpatrick documenta las siguientes métricas para medir la confiabilidad [FITZ]:

| Métrica | Definición | Fórmula |
|---------|------------|---------|
| **MTBF** (Mean Time Between Failures) | Tiempo promedio entre fallas consecutivas bajo condiciones predefinidas. | \[ \text{MTBF} = \frac{T_{\text{total}}}{N} \] donde \(N\) = número de fallas en el período \(T_{\text{total}}\) |
| **MTTR** (Mean Time To Repair) | Tiempo promedio para reparar o mantener el equipo. | - |
| **MTRec** (Mean Time to Recover) | Tiempo promedio para restaurar la operación del sistema tras una falla (incluye restauración desde puntos de control). | - |
| **Probabilidad de falla** | Uso de métodos formales para predecir la probabilidad de que un sistema se comporte de manera esperada bajo ciertas circunstancias. | Especialmente apropiada para sistemas críticos y de "ejecución continua". |

### 3.2. Métricas de densidad de defectos

Aunque no se proporciona una fórmula explícita en los documentos, Tian discute la **densidad de defectos** como una medida fundamental [TIA]:

> *"la tasa de defectos (número de defectos por KLOC, Puntos de Función, otra unidad)"*

**Unidades de medida comunes (implícitas en los textos):**
- **KLOC** (miles de líneas de código)
- **Puntos de Función** (medida independiente del lenguaje)
- **Número de fallas por n horas de operación**

### 3.3. Disponibilidad (Availability)

Aunque no se define explícitamente en los textos, Fitzpatrick menciona la disponibilidad como un aspecto de la confiabilidad [FITZ]:

> *"El aspecto de disponibilidad de la confiabilidad es naturalmente una preocupación importante en sistemas en línea y de bases de datos."*

La disponibilidad puede calcularse como:

\[ \text{Disponibilidad} = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}} \]

---

## 4. Complejidad ciclomática de McCabe (1976)

Fitzpatrick menciona la métrica de complejidad de McCabe como un ejemplo de medición científica de la calidad [FITZ]:

> *"La complejidad es medida por McCabe (1976) 'como un número ciclomático, basado en la teoría de grafos, que busca estimar el número de caminos linealmente independientes a través de un programa'."*

**Propósito de esta métrica:** Estimación indirecta de la testabilidad y mantenibilidad. Una complejidad ciclomática alta sugiere que el programa tendrá más caminos de ejecución, lo que hace más difícil probarlo exhaustivamente y mantenerlo.

---

## 5. Métodos de medición desde el punto de vista del comprador

Fitzpatrick, citando a Gillies (1992), detalla **cinco enfoques** para medir la calidad desde la perspectiva del comprador [FITZ]:

| Método | Descripción |
|--------|-------------|
| **Simple scoring** (puntuación simple) | Se asigna una puntuación a cada criterio y se suman. |
| **Weighted scoring** (puntuación ponderada o phased weighted factor method) | Cada criterio tiene un peso relativo; se multiplica la puntuación por el peso y se suma. |
| **Método Kepner-Tregor** | Técnica estructurada para toma de decisiones con múltiples criterios. |
| **Método Colonia (Cologne combination method)** | Combinación de diferentes técnicas de evaluación. |
| **Perfil de polaridad (Polarity profiling)** | Representación gráfica de fortalezas y debilidades relativas. |

### 5.1. Limitaciones de estos métodos

Fitzpatrick señala que Gillies considera que estos métodos tienen deficiencias debido a "su fecha más antigua" (were older date) [FITZ]. Por ello, Gillies propone una técnica más moderna.

---

## 6. LOQUM (Locally Defined Quality Modelling)

Gillies (citado por Fitzpatrick) propone **LOQUM** como una técnica más moderna y flexible para la medición de calidad, que consta de **tres pasos** [FITZ]:

### 6.1. LOCRIT

> *"Un ejercicio de elicitación de conocimiento para derivar los criterios de calidad relevantes y las medidas asociadas."* [FITZ]

**Propósito:** Identificar qué criterios de calidad son importantes en el contexto específico de la organización o proyecto, y cómo se medirán.

### 6.2. LOCREL

> *"Una elicitación de conocimiento adicional para definir relaciones y conflictos entre criterios."* [FITZ]

**Propósito:** Entender cómo los diferentes criterios de calidad interactúan entre sí (relaciones directas, inversas, neutrales).

### 6.3. LOCPRO

> *"Una herramienta de perfilado para mostrar un perfil gráfico que represente la calidad global del sistema."* [FITZ]

**Propósito:** Visualizar los resultados de la medición de una manera comprensible para los tomadores de decisiones.

---

## 7. La complejidad como indicador de calidad (McCall)

Fitzpatrick menciona que McCall et al. (1979) propusieron una **matriz de complejidad** como herramienta para evaluar la testabilidad [FITZ]:

**Factores incluidos en la matriz de complejidad:**
- Número y tamaño de módulos
- Tamaño de los procedimientos
- Profundidad de anidamiento (nesting)
- Número de errores por unidad de tiempo
- Número de alteraciones por unidad de tiempo

---

## 8. Conclusión del módulo

La medición de calidad de software es un campo en evolución. No existe una métrica única que capture toda la complejidad de la calidad. Los enfoques prácticos combinan:

1. **Métricas cuantitativas** (MTBF, densidad de defectos, complejidad ciclomática)
2. **Métodos estructurados de evaluación** (weighted scoring, LOQUM)
3. **Juicio experto y conocimiento del dominio** (LOCRIT, LOCREL)

Fitzpatrick señala que "este nivel de detalle está más allá del alcance de este documento", remitiendo a lectores interesados a Gillies (1992, p40-43) para numerosas referencias sobre medición de calidad [FITZ].

---

## Preguntas de integración (estudio activo)

1. ¿Cuál es la diferencia entre **medición directa** e **indirecta** en calidad de software? Pon un ejemplo de cada una.
2. ¿Qué significa **MTBF** y cómo se calcula?
3. ¿Qué mide la **complejidad ciclomática de McCabe** y para qué se utiliza?
4. ¿Cuáles son los **5 métodos de medición** desde el punto de vista del comprador según Gillies?
5. ¿Qué significan las siglas **LOQUM**, **LOCRIT**, **LOCREL** y **LOCPRO**?
6. ¿Qué factores incluye la **matriz de complejidad** de McCall et al. (1979)?