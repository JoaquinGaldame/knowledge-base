# Modelo ISO 9126 y la Familia SQuaRE (ISO 25000)

> **Fuente primaria:** [TIA] §2.2
> **Fuente secundaria:** [PET], [FITZ] §2.4 (mención)

## 1. Contexto e importancia del estándar

ISO 9126 es, según Tian, "el marco de trabajo más influyente en la comunidad de ingeniería de software hoy en día" [TIA]. Actualmente ha evolucionado hacia la familia **ISO 25000 (SQuaRE - Software Quality Requirements and Evaluation)**.

A diferencia de los modelos de McCall y Boehm, ISO 9126 es un **estándar internacional**, no un modelo académico o militar.

---

## 2. Estructura jerárquica del modelo

ISO 9126 organiza la calidad en una **jerarquía estricta** de dos niveles [TIA]:
```text
Calidad del software
├── Características (6)
│   └── Subcaracterísticas (exclusivas, no compartidas)
```

**Característica clave de la estructura:** cada subcaracterística pertenece **exclusivamente** a una única característica padre. No hay solapamiento.

---

## 3. Las 6 características de calidad (top-level)

### 3.1. Funcionalidad (Functionality)

**Definición formal (TIA):** *"Conjunto de atributos que indican la existencia de un conjunto de funciones y sus propiedades específicas. Las funciones son aquellas que satisfacen necesidades establecidas o implícitas."*

**Subcaracterísticas:**

| Subcaracterística | Definición (TIA) |
|-------------------|------------------|
| **Suitability** (Adecuación) | Atributos relacionados con la existencia de un conjunto de funciones apropiadas para la tarea. |
| **Accuracy** (Exactitud) | Atributos relacionados con la corrección de los resultados o el grado de precisión. |
| **Interoperability** (Interoperabilidad) | Capacidad de interactuar con otros sistemas específicos. |
| **Security** (Seguridad) | Capacidad de prevenir el acceso no autorizado (accidental o deliberado). |

### 3.2. Confiabilidad (Reliability)

**Definición formal (TIA):** *"Conjunto de atributos que indican la capacidad del software de mantener su nivel de rendimiento bajo condiciones establecidas durante un período de tiempo establecido."*

**Subcaracterísticas:**

| Subcaracterística | Definición (TIA) |
|-------------------|------------------|
| **Maturity** (Madurez) | Atributos relacionados con la frecuencia de fallas. |
| **Fault tolerance** (Tolerancia a fallos) | Capacidad de mantener un nivel de rendimiento especificado en caso de fallos del software o de violación de su interfaz especificada. |
| **Recoverability** (Recuperabilidad) | Capacidad de restablecer el nivel de rendimiento y recuperar los datos afectados en caso de falla. |

### 3.3. Usabilidad (Usability)

**Definición formal (TIA):** *"Conjunto de atributos que indican el esfuerzo necesario para el uso y la evaluación individual de dicho uso por un conjunto de usuarios establecido o implícito."*

**Subcaracterísticas:**

| Subcaracterística | Definición (TIA) |
|-------------------|------------------|
| **Understandability** (Comprensibilidad) | Esfuerzo necesario para comprender el concepto lógico y la aplicabilidad. |
| **Learnability** (Capacidad de aprendizaje) | Esfuerzo necesario para aprender su aplicación (ej., control de entrada, salida). |
| **Operability** (Operabilidad) | Esfuerzo necesario para operar y controlar el sistema. |

### 3.4. Eficiencia (Efficiency)

**Definición formal (TIA):** *"Conjunto de atributos que indican la relación entre el nivel de rendimiento del software y la cantidad de recursos utilizados, bajo condiciones establecidas."*

**Subcaracterísticas:**

| Subcaracterística | Definición (TIA) |
|-------------------|------------------|
| **Time behavior** (Comportamiento temporal) | Tiempos de respuesta, tiempos de procesamiento y tasas de rendimiento. |
| **Resource behavior** (Comportamiento de recursos) | Cantidad de recursos utilizados y la duración de su uso. |

### 3.5. Mantenibilidad (Maintainability)

**Definición formal (TIA):** *"Conjunto de atributos que indican el esfuerzo necesario para realizar modificaciones especificadas."*

**Subcaracterísticas:**

| Subcaracterística | Definición (TIA) |
|-------------------|------------------|
| **Analyzability** (Capacidad de análisis) | Esfuerzo necesario para diagnosticar deficiencias o causas de fallas, o para identificar las partes a modificar. |
| **Changeability** (Capacidad de cambio) | Esfuerzo necesario para realizar una modificación, eliminar un fallo o cambiar el entorno. |
| **Stability** (Estabilidad) | Riesgo de efecto inesperado debido a las modificaciones. |
| **Testability** (Testeabilidad) | Esfuerzo necesario para validar el software modificado. |

### 3.6. Portabilidad (Portability)

**Definición formal (TIA):** *"Conjunto de atributos que indican la capacidad del software de ser transferido de un entorno a otro."*

**Subcaracterísticas:**

| Subcaracterística | Definición (TIA) |
|-------------------|------------------|
| **Adaptability** (Adaptabilidad) | Oportunidad de adaptarse a diferentes entornos especificados sin aplicar otras acciones o medios. |
| **Installability** (Instalabilidad) | Esfuerzo necesario para instalar el software en un entorno específico. |
| **Conformance** (Conformidad) | Grado en que el software se adhiere a estándares o convenciones relacionadas con la portabilidad. |
| **Replaceability** (Reemplazabilidad) | Oportunidad y esfuerzo de usar el software en lugar de otro software específico. |

---

## 4. La crítica de Dromey (1995-1996)

Tian señala una limitación importante del modelo ISO 9126 [TIA]:

> *"Ciertas propiedades del producto están vinculadas a múltiples características o subcaracterísticas de calidad. Por ejemplo, varias formas de redundancia afectan tanto a la eficiencia como a la mantenibilidad."*

**Problema fundamental:** ISO 9126 asume una jerarquía estricta donde las subcaracterísticas son **exclusivas** (non-overlapping). Esto no refleja la realidad de la ingeniería de software, donde una misma propiedad interna puede influir en múltiples atributos de calidad.

**Consecuencia:** Se han propuesto marcos alternativos que permiten relaciones más flexibles entre los diferentes atributos o factores de calidad, y facilitan una transición suave desde preocupaciones de calidad específicas a propiedades de producto y métricas concretas [TIA].

---

## 5. Modelos alternativos y adaptaciones por dominio (Tian)

### 5.1. CUPRIMDS (IBM)

Tian documenta que IBM utiliza su propia lista de atributos de calidad para sus productos de software [TIA]:

**CUPRIMDS** (acrónimo):
- **C**apability (capacidad)
- **U**sability (usabilidad)
- **P**erformance (rendimiento)
- **R**eliability (confiabilidad)
- **I**nstallation (instalación)
- **M**aintenance (mantenimiento)
- **D**ocumentation (documentación)
- **S**ervice (servicio)

A menudo se utiliza junto con la **satisfacción general del cliente** (Overall customer satisfaction), formando el acrónimo **CUPRIMDSO** [TIA].

### 5.2. Atributos de calidad para aplicaciones web (Offutt, 2002)

Tian cita la identificación de atributos de calidad para aplicaciones web [TIA]:

| Prioridad | Atributos |
|-----------|-----------|
| **Primarios** | Confiabilidad, Usabilidad, Seguridad |
| **Secundarios** | Disponibilidad, Escalabilidad, Mantenibilidad, Tiempo de comercialización |

### 5.3. Priorización por dominio de aplicación

Tian documenta explícitamente que la priorización de atributos varía según el dominio [TIA]:

> *"Por ejemplo, el rendimiento (o eficiencia) y la confiabilidad tendrían prioridad sobre la usabilidad y la mantenibilidad para productos de software de tiempo real. Al contrario, podría ser al revés para productos de mercado masivo para usuarios finales."*

---

## 6. La centralidad de la correctitud en Tian

A pesar de la existencia de múltiples características y subcaracterísticas, Tian adopta un enfoque **centrado en la correctitud** para su libro [TIA]:

> *"La correctitud es típicamente el aspecto más importante de la calidad en situaciones donde la vida diaria o el negocio dependen del software, como en la gestión de redes informáticas de toda la empresa, bases de datos financieras y software de control en tiempo real. Incluso para segmentos de mercado donde las nuevas características y la usabilidad tienen prioridad, como para aplicaciones basadas en web y software para uso personal en el mercado masivo, la correctitud sigue siendo una parte fundamental de las expectativas de los usuarios."*

**Definición de correctitud en ISO 9126:** se relaciona tanto con la **funcionalidad** (particularmente con su subcaracterística de exactitud/conformidad) como con la **confiabilidad** [TIA].

---

## Preguntas de integración (estudio activo)

1. ¿Cuáles son las **6 características de calidad** de nivel superior en ISO 9126?
2. ¿Qué diferencia fundamental existe entre la subcaracterística **Maturity** y **Recoverability** dentro de Confiabilidad?
3. Según la crítica de Dromey, ¿por qué la estructura de subcaracterísticas exclusivas de ISO 9126 es problemática? Pon un ejemplo concreto.
4. ¿Qué significa el acrónimo **CUPRIMDSO** y qué empresa lo utiliza?
5. Según Offutt (2002), ¿cuáles son los **tres atributos primarios** de calidad para aplicaciones web?
6. ¿Por qué Tian adopta un enfoque **centrado en la correctitud** a pesar de reconocer otros atributos de calidad?
7. En un producto de **tiempo real** vs. un producto de **mercado masivo**, ¿cómo varía la priorización de atributos según Tian?