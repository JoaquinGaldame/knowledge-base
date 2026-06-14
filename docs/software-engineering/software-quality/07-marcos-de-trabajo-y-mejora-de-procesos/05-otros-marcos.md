# Otros Marcos de Trabajo: Trillium, IDEAL, LOGOS-CMM

> **Fuente primaria:** [BED] §3 (tabla comparativa)
> **Fuente secundaria:** [BED] §2 (descripciones conceptuales)

## 1. Trillium (Versión 3.1)

### 1.1. Identificación del marco

Bedini incluye Trillium en su tabla comparativa de "marcos de trabajo pilares" [BED]:

| Propiedad | Valor |
|-----------|-------|
| **Nombre completo** | Trillium Versión 3.1 |
| **Tipo de framework** | Modelo de madurez |
| **Tiempo estimado** | 18 meses |
| **Persona interna/externa** | Interna |
| **Equipos especiales** | Quality management, TQM, (SQA opcional) |
| **N° de páginas** | 130 |
| **Costo** | Gratis (web) |
| **Alcance** | Empresas (Telecomunicaciones) |
| **Focalizado** | Procesos |
| **Niveles y prácticas** | 5 Niveles, 8 áreas de capacidad, 27 guías detalladas, 508 prácticas |
| **N° empresas** | < 100 |

### 1.2. Dominio de aplicación específico

A diferencia de CMM (que es genérico para desarrollo de software) e ISO 9001 (que es transversal a todas las industrias), **Trillium está específicamente orientado al sector de telecomunicaciones** [BED].

**Alcance:** "Empresas (Telecomunicaciones)" [BED]

### 1.3. Estructura del modelo

Según los datos de Bedini, Trillium tiene [BED]:

| Componente | Cantidad |
|------------|----------|
| **Niveles de madurez** | 5 |
| **Áreas de capacidad** | 8 |
| **Guías detalladas** | 27 |
| **Prácticas** | 508 |

### 1.4. Equipos especiales requeridos

Bedini indica que Trillium requiere [BED]:
- **Quality management** (obligatorio)
- **TQM (Total Quality Management)** (obligatorio)
- **SQA** (opcional, a diferencia de CMM donde es obligatorio)

### 1.5. Adopción reportada

> *"Número de empresas: < 100"* [BED]

Esto indica que, en el momento de la publicación de Bedini, Trillium tenía una adopción significativamente menor que CMM (~782 empresas) o ISO 9001 en software (miles de empresas).

---

## 2. IDEAL (Versión 1.6)

### 2.1. Identificación del marco

| Propiedad | Valor según Bedini |
|-----------|---------------------|
| **Nombre completo** | IDEAL™ Versión 1.6 |
| **Tipo de framework** | Administrador de mejoramiento de procesos |
| **Tiempo estimado** | Plan SPI: 1 a 5 años |
| **Persona interna/externa** | Interna |
| **Equipos especiales** | SEPG, MSG, TWG |
| **N° de páginas** | 236 |
| **Costo** | Gratis (web) |
| **Alcance** | Organización, Desarrollo de Software |
| **Focalizado** | Procesos de software |
| **Niveles y prácticas** | 5 Fases, 47 Tareas |
| **N° empresas** | No especificado |

### 2.2. Naturaleza y propósito

A diferencia de CMM (que es un modelo de madurez) o ISO 9001 (que es un estándar de aseguramiento de calidad), **IDEAL es un modelo de proceso para la mejora continua** [BED].

**Característica distintiva:** IDEAL no mide madurez, sino que proporciona una **hoja de ruta** para que las organizaciones planifiquen, ejecuten y mantengan esfuerzos de mejora de procesos.

### 2.3. Las 5 fases de IDEAL

Aunque Bedini no las detalla explícitamente, la estructura de "5 Fases, 47 Tareas" sugiere el siguiente ciclo (según conocimiento estándar del modelo IDEAL, consistente con la información de Bedini):

| Fase | Propósito (inferido de la estructura) |
|------|--------------------------------------|
| **I** (Initiating) | Iniciar el programa de mejora, obtener patrocinio. |
| **D** (Diagnosing) | Diagnosticar el estado actual de los procesos. |
| **E** (Establishing) | Establecer planes de acción. |
| **A** (Acting) | Actuar: ejecutar los planes de mejora. |
| **L** (Learning) | Aprender de los resultados y reiniciar el ciclo. |

### 2.4. Equipos especiales requeridos

Bedini identifica los siguientes equipos [BED]:

| Sigla | Nombre | Función (inferida) |
|-------|--------|---------------------|
| **SEPG** | Software Engineering Process Group | Grupo líder en definición e implementación de procesos. |
| **MSG** | Management Steering Group | Grupo de dirección que supervisa estratégicamente el programa de mejora. |
| **TWG** | Technical Working Group | Grupos de trabajo técnicos que ejecutan tareas específicas. |

### 2.5. Relación con CMM

IDEAL fue desarrollado por el mismo **Software Engineering Institute (SEI)** que desarrolló CMM. Mientras CMM responde a la pregunta **"¿qué tan maduro es nuestro proceso?"**, IDEAL responde a la pregunta **"¿cómo mejoramos nuestro proceso?"**.

Bedini clasifica IDEAL como "Administrador de mejoramiento de procesos" (no como modelo de madurez) [BED].

---

## 3. LOGOS-CMM (Versión 1.0)

### 3.1. Identificación del marco

| Propiedad | Valor según Bedini |
|-----------|---------------------|
| **Nombre completo** | LOGOS-CMM Versión 1.0 |
| **Tipo de framework** | Modelo de madurez |
| **Tiempo estimado** | No indicado |
| **Persona interna/externa** | Interna y Externa |
| **Equipos especiales** | SQA, SEPG, SCM |
| **N° de páginas** | "Reducidos" (450 páginas) |
| **Costo** | U$ 75 (web solo el artículo) |
| **Alcance** | Organización, Desarrollo de Software |
| **Focalizado** | Procesos de software |
| **Niveles y prácticas** | 5 Niveles de madurez, ?? KPA |
| **N° empresas** | 200 organizaciones (etapa de validación) |

### 3.2. Derivación de CMM

Bedini señala explícitamente que LOGOS-CMM es un modelo **derivado de CMM** [BED].

**Diferencias con CMM estándar:**

| Aspecto | CMM Versión 1.1 | LOGOS-CMM Versión 1.0 |
|---------|-----------------|----------------------|
| **Páginas** | 561 | 450 ("reducidos") |
| **Costo** | U$ 49,44 (gratis web) | U$ 75 |
| **Equipos especiales** | SQA, SEPG, SCM | SQA, SEPG, SCM (mismos) |
| **Empresas** | ~782 | ~200 (etapa validación) |

### 3.3. Estado de adopción

> *"200 organizaciones (etapa de validación)"* [BED]

Esto indica que, en el momento de la publicación de Bedini, LOGOS-CMM estaba en **fase de validación**, no en plena producción como CMM estándar.

---

## 4. SPARDAT (mención en Fitzpatrick)

Aunque Bedini no incluye SPARDAT en su tabla comparativa, Fitzpatrick lo menciona como un modelo comercial específico para el entorno bancario [FITZ §2.2]:

> *"Un modelo comercial que sigue este enfoque es el **modelo de calidad SPARDAT** de Alemania, que clasifica tres características significativas: aplicabilidad, mantenibilidad y adaptabilidad. Estas características se subdividen a su vez, dando veinte factores de calidad en total. Este modelo fue creado para el desarrollo de software en el entorno bancario."* [FITZ]

**Características del modelo SPARDAT:**

| Característica principal | Subfactores asociados |
|-------------------------|----------------------|
| Aplicabilidad | (Subdividido en múltiples factores) |
| Mantenibilidad | (Subdividido en múltiples factores) |
| Adaptabilidad | (Subdividido en múltiples factores) |

**Total de factores de calidad:** 20 [FITZ].

**Dominio de aplicación:** Entorno bancario (banking environment).

---

## 5. Resumen comparativo de marcos de trabajo "pilares" (Bedini)

Bedini organiza los siguientes marcos como los "pilares" en su tabla comparativa [BED]:

| Marco | Tipo | Dominio principal | Niveles | Adopción (aprox.) |
|-------|------|-------------------|---------|-------------------|
| **CMM** | Modelo de madurez | Software general | 5 | ~782 |
| **LOGOS-CMM** | Modelo de madurez | Software general | 5 | ~200 (validación) |
| **IDEAL** | Mejora de procesos | Software general | 5 fases | No especificado |
| **SPICE** | Evaluación de procesos | Software general | 6 | ~314 (Fase III) |
| **ISO 9001** | Estándar de calidad | Transversal | 20 elementos | 8.100-13.500 SW |
| **Trillium** | Modelo de madurez | Telecomunicaciones | 5 | < 100 |

---

## 📝 Preguntas de integración (estudio activo)

1. ¿En qué **dominio específico** se aplica principalmente el modelo Trillium y cuántas prácticas define?
2. ¿Cuál es la diferencia fundamental entre **IDEAL** (modelo de mejora de procesos) y **CMM** (modelo de madurez)?
3. ¿Qué significan las siglas **SEPG**, **MSG** y **TWG** en el contexto de IDEAL?
4. ¿En qué se diferencia **LOGOS-CMM** del CMM estándar y cuántas páginas tiene?
5. Según Fitzpatrick, ¿cuáles son las **tres características principales** del modelo SPARDAT y en qué dominio se aplica?
6. ¿Cuál de los marcos de la tabla de Bedini reporta el **menor número de empresas** adoptantes y por qué crees que ocurre?
7. ¿Cuál es la principal diferencia entre **SPICE** y **CMM** en cuanto a su enfoque (evaluación de procesos vs. determinación de madurez)?