# SPICE / ISO 15504

> **Fuente primaria:** [BED] §3 (tabla comparativa)
> **Fuente secundaria:** [PET] (mención)

## 1. Identificación del marco

| Propiedad | Valor según Bedini |
|-----------|---------------------|
| **Nombre completo** | SPICE (Software Process Improvement and Capability Determination) / ISO/IEC TR2 15504 Versión 1.00 |
| **Tipo de framework** | Modelo de madurez y evaluación de procesos |
| **Tiempo estimado** | Relativo |
| **Persona interna/externa** | Interna |
| **Equipos especiales** | Sponsor, owner, assessor (SQA opcional) |
| **N° de páginas** | 474 |
| **Costo** | U$ 50 a 100 (gratis web) |
| **Alcance** | Software, Producción, Organización |
| **Focalizado** | Procesos de software |
| **Niveles y prácticas** | 5 Categorías de procesos, 29 Procesos, 200 prácticas base, 6 Niveles de madurez |
| **N° empresas** | Fase I: 35, Fase II: 250, Fase III: 314 |

---

## 2. Naturaleza y propósito de SPICE

Bedini describe SPICE como un modelo de **madurez y evaluación de procesos** cuyo área central es "evaluar los procesos más que determinar la madurez, a pesar que posee mecanismos para hacerlo" [BED].

**Característica distintiva:** SPICE se centra en la **evaluación de procesos** (process assessment) como base para la mejora, no solo en la certificación o determinación de madurez.

Bedini clasifica SPICE dentro del color **lila** en su taxonomía (Estándar internacional) [BED].

---

## 3. Estructura de SPICE

### 3.1. Categorías de procesos

SPICE define **5 categorías de procesos** y **29 procesos** en total [BED].

Las categorías (según conocimiento estándar, implícitas en Bedini):

| Categoría | Propósito |
|-----------|-----------|
| **Ingeniería** | Procesos de desarrollo y mantenimiento de software. |
| **Gestión** | Procesos de planificación, seguimiento y control de proyectos. |
| **Organización** | Procesos de mejora de procesos y gestión de recursos. |
| **Soporte** | Procesos de aseguramiento de calidad, verificación, validación. |
| **Cliente-Proveedor** | Procesos de adquisición, suministro y operación. |

### 3.2. Prácticas base

SPICE define **200 prácticas base** (base practices) [BED].

### 3.3. Niveles de madurez

SPICE utiliza **6 niveles de madurez** (un nivel más que CMM) [BED]:

| Nivel | Denominación (según conocimiento estándar) |
|-------|---------------------------------------------|
| 0 | Incompleto |
| 1 | Realizado |
| 2 | Gestionado |
| 3 | Establecido |
| 4 | Predecible |
| 5 | Optimizador |

---

## 4. Equipos especiales requeridos

Bedini identifica los siguientes roles [BED]:

| Rol | Función |
|-----|---------|
| **Sponsor** | Patrocinador del proyecto de evaluación; proporciona recursos y respaldo. |
| **Owner** | Propietario del proceso evaluado. |
| **Assessor** | Evaluador calificado que realiza la evaluación. |
| **SQA** (opcional) | Aseguramiento de calidad del software (mencionado como opcional, a diferencia de CMM donde es requerido). |

---

## 5. Fases de implementación de SPICE (según tabla de Bedini)

Bedini reporta el número de empresas en diferentes fases de adopción de SPICE [BED]:

| Fase | Número de empresas |
|------|-------------------|
| **Fase I** | 35 |
| **Fase II** | 250 |
| **Fase III** | 314 |

Esto sugiere que, en el momento de la publicación de Bedini, SPICE estaba en proceso de adopción creciente, pero aún no había alcanzado la masa crítica de CMM.

---

## 6. SPICE vs. CMM: diferencias clave

Bedini no hace una comparación explícita, pero la tabla permite inferir:

| Aspecto | CMM | SPICE |
|---------|-----|-------|
| **Enfoque principal** | Madurez de la organización | Evaluación de procesos para mejora |
| **Niveles** | 5 | 6 |
| **Equipos especiales** | SQA, SEPG, SCM (obligatorios) | Sponsor, owner, assessor (SQA opcional) |
| **Base de empresas** | ~782 (en el momento) | ~314 (Fase III) |
| **Origen** | SEI (EE.UU., militar) | ISO (internacional, consenso) |

---

## 7. Estado actual (en el momento de Bedini)

Bedini señala que SPICE era en ese momento un **"borrador"** y que evolucionaría a **SPICE99 o ISO/IEC TR2 15504**, con el objetivo de convertirse en el **futuro estándar 15504** [BED].

> *"SPICE (la versión actual a partir de 1999 se llama SPICE99 o ISO/IEC TR2 15504, futuro estándar 15504)"* [BED]

**Evolución posterior (no en Bedini):** ISO 15504 se convirtió en un estándar internacional para la evaluación de procesos de software, y sus conceptos han sido integrados en **ISO 33000** (evaluación de procesos) y en **CMMI** (que adoptó el marco de evaluación de SPICE).

---

## Preguntas de integración (estudio activo)

1. ¿Cuál es la **diferencia fundamental** entre el enfoque de SPICE y el de CMM según Bedini?
2. ¿Cuántas **categorías de procesos**, **procesos** y **prácticas base** define SPICE?
3. ¿Cuántos **niveles de madurez** tiene SPICE y en qué se diferencian de los 5 niveles de CMM?
4. ¿Qué **roles** requiere SPICE para una evaluación y en qué se diferencia de los equipos especiales de CMM?
5. ¿Qué significan las siglas **SPICE** y cuál es su relación con ISO 15504?
6. Según la tabla de Bedini, ¿cuántas empresas habían alcanzado la Fase III de SPICE en el momento de su publicación?