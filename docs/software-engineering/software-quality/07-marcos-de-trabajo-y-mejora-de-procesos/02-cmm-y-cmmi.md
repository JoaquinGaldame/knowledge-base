# CMM / CMMI (Capability Maturity Model)

> **Fuente primaria:** [BED] §2, §3 (tabla comparativa)
> **Fuente secundaria:** [FITZ] §3.1.2 (referencia indirecta a SEI)

## 1. Identificación del marco

| Propiedad | Valor según Bedini |
|-----------|---------------------|
| **Nombre completo** | Capability Maturity Model (CMM®) Versión 1.1 |
| **Tipo de framework** | Modelo de madurez |
| **Tiempo estimado** | 1-2 niveles, aproximadamente 2½ años |
| **Persona interna/externa** | Interna y Externa |
| **Equipos especiales** | SQA, SEPG, SCM |
| **N° de páginas** | 561 |
| **Costo** | U$ 49,44 (gratis web) |
| **Alcance** | Organización, Desarrollo de Software |
| **Focalizado** | Procesos de software |
| **Niveles y prácticas** | 5 Niveles de madurez, 18 KPA (Key Process Areas) |
| **N° empresas** | 782 (en el momento de la publicación de Bedini) |

---

## 2. Origen y contexto

El CMM fue desarrollado por el **Software Engineering Institute (SEI)** de la Universidad Carnegie Mellon, por encargo del Departamento de Defensa de EE.UU. Su propósito original era proporcionar un marco para evaluar la capacidad de los contratistas de software del gobierno.

Bedini clasifica CMM dentro del color **rojo** en su taxonomía (Modelo de capacidad de madurez) [BED].

---

## 3. Los 5 niveles de madurez

Bedini no detalla explícitamente cada nivel en el texto proporcionado, pero la tabla comparativa indica que CMM posee **5 niveles de madurez** y **18 Áreas Clave de Proceso (KPA)** [BED].

La estructura canónica de niveles (según conocimiento estándar, confirmada por la referencia a "5 Niveles de madurez" en Bedini) es:

| Nivel | Denominación | Característica principal |
|-------|--------------|--------------------------|
| 1 | Inicial | Procesos ad hoc, caóticos. El éxito depende del esfuerzo individual. |
| 2 | Repetible | Procesos básicos de gestión de proyectos documentados (requisitos, planificación, seguimiento). |
| 3 | Definido | Procesos estandarizados para toda la organización (ingeniería y gestión). |
| 4 | Gestionado | Medición y control cuantitativo de procesos y productos. |
| 5 | Optimizador | Mejora continua de procesos mediante retroalimentación cuantitativa. |

---

## 4. Equipos especiales requeridos por CMM

Bedini identifica los siguientes equipos especiales como necesarios para implementar CMM [BED]:

| Sigla | Nombre | Función |
|-------|--------|---------|
| **SQA** | Software Quality Assurance | Aseguramiento de la calidad del software; verifica que se sigan los procesos y estándares. |
| **SEPG** | Software Engineering Process Group | Grupo líder en la definición, implementación y mejora de los procesos de software. |
| **SCM** | Software Configuration Management | Gestión de la configuración del software (control de versiones, líneas base, etc.). |

---

## 5. Conceptos asociados a la madurez (Bedini)

Bedini define explícitamente los siguientes conceptos que son fundamentales para entender CMM [BED]:

### 5.1. Organización inmadura

> *"Los procesos de software generalmente se improvisan, esto incluye la posibilidad que, aún especificados los procesos, ellos no se desarrollen en forma rigurosa."*

**Características de una organización inmadura (inferidas de la definición):**
- Los procesos no se siguen consistentemente.
- La planificación es débil o inexistente.
- El éxito depende de "héroes" individuales.
- No hay medición sistemática.

### 5.2. Organización madura

> *"Posee la habilidad en toda su organización para administrar tanto el desarrollo como la mantención de proyectos."*

**Características de una organización madura (inferidas):**
- Los procesos están definidos, documentados y seguidos.
- Existe medición y control.
- La mejora continua es parte de la cultura.

---

## 6. Limitaciones y críticas específicas a CMM (inferidas de Bedini)

Aunque Bedini no critica CMM directamente, sus observaciones generales sobre los marcos de trabajo se aplican:

1. **Subjetividad en las evaluaciones:** "la mayoría de los MT el grado de objetividad es puramente subjetivo" [BED].
2. **Necesidad de equipos especiales:** SQA, SEPG, SCM representan un costo que muchas pequeñas empresas no pueden afrontar [BED].
3. **Alta exigencia de conocimiento previo:** "la mayoría de los MT considera que el personal posee un alto conocimiento y experiencia de ciertas prácticas propuestas" [BED].
4. **Riesgo de "parálisis de procesos":** el equipo puede perderse en la tecnología y olvidar que se desarrolla software, no procesos [BED].

---

## 7. Derivados y evolución

Bedini menciona explícitamente un derivado de CMM [BED]:

| Modelo derivado | Descripción |
|-----------------|-------------|
| **LOGOS-CMM Vers. 1.0** | Modelo de madurez con "páginas reducidas" (450), costo U$ 75. Utilizado por aproximadamente 200 organizaciones en etapa de validación. |

**Evolución histórica (no explícita en Bedini, pero relevante):** CMM evolucionó a **CMMI (Capability Maturity Model Integration)**, que integra múltiples disciplinas (software, sistemas ingeniería, adquisiciones).

---

## Preguntas de integración (estudio activo)

1. ¿Qué organismo desarrolló CMM y con qué propósito original?
2. ¿Cuáles son los **5 niveles de madurez** de CMM y qué caracteriza a cada uno?
3. ¿Qué significan las siglas **SQA**, **SEPG** y **SCM** y cuál es su función en CMM?
4. Según Bedini, ¿qué diferencia a una **organización madura** de una **inmadura**?
5. ¿Cuáles son las principales **limitaciones prácticas** de CMM para pequeñas empresas según Bedini?
6. ¿Qué es LOGOS-CMM y en qué se diferencia del CMM estándar?