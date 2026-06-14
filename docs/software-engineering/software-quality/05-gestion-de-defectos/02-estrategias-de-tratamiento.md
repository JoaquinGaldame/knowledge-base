# Estrategias de Tratamiento de Defectos

> **Fuente primaria:** [TIA] §2.3 (pp. 23-24)
> **Fuente secundaria:** [FITZ] §2.3 (técnicas de prueba), [BED] §2 (mejora de procesos)

## 1. Las tres estrategias genéricas para tratar defectos

Tian establece que, para la mayoría de las organizaciones de desarrollo de software, "asegurar la calidad significa tratar con defectos" [TIA]. Las tres formas genéricas de hacerlo son:

| Estrategia | Descripción |
|------------|-------------|
| **1. Prevención de defectos (Defect Prevention)** | Evitar que los defectos se introduzcan en primer lugar. |
| **2. Detección y eliminación de defectos (Defect Detection and Removal)** | Encontrar y corregir los defectos que ya han sido introducidos. |
| **3. Contención de defectos (Defect Containment)** | Limitar el impacto de los defectos que no se detectaron a tiempo. |

---

## 2. Prevención de defectos

### 2.1. Principios generales

Bedini, al hablar de mejora de procesos, señala seis principios que rigen los procesos de cambio, varios de los cuales contribuyen a la prevención de defectos [BED]:

| Principio | Contribución a la prevención |
|-----------|------------------------------|
| I. Los mayores cambios deben comenzar en la jerarquía más alta | El liderazgo debe impulsar la cultura de calidad. |
| II. Todos deben estar involucrados | La calidad es responsabilidad de todos, no solo de testers. |
| III. Cambios efectivos requieren conocimiento de los procesos actuales | No se puede mejorar lo que no se conoce. |
| IV. Los cambios son continuos | La prevención no es un esfuerzo único, sino un proceso continuo. |
| V. Los cambios no se retienen sin refuerzo periódico | La prevención requiere monitoreo constante. |
| VI. Los cambios requieren inversión | Se necesita presupuesto, personal dedicado y tiempo. |

### 2.2. Técnicas específicas de prevención (inferidas de Fitzpatrick)

Aunque Fitzpatrick no organiza explícitamente las técnicas por categoría, se pueden extraer técnicas de prevención de sus descripciones:

| Técnica | Descripción | Factor de calidad asociado |
|---------|-------------|---------------------------|
| **Especificación de requisitos de calidad desde el inicio** | Los factores de calidad deben incorporarse en la especificación de requisitos, no añadirse como "parches" posteriores. | Todos |
| **Selección del lenguaje apropiado** | Elegir COBOL para negocios, FORTRAN para científicos mejora la eficiencia. | Eficiencia |
| **Buenas prácticas de diseño** | Cohesión, acoplamiento, normalización. | Mantenibilidad, testabilidad |
| **Uso de estándares** | Adherencia a estándares de SO, lenguajes, interfaces. | Portabilidad, interoperabilidad |

---

## 3. Detección y eliminación de defectos

### 3.1. Técnicas documentadas por Fitzpatrick

Fitzpatrick describe múltiples técnicas de detección y eliminación de defectos en el contexto de diferentes factores de calidad [FITZ]:

| Técnica | Aplicación | Descripción |
|---------|------------|-------------|
| **Inspecciones de programa** | Correctitud | Revisión manual del código por pares. |
| **Verificación basada en matemáticas (métodos formales)** | Correctitud (sistemas críticos) | Demostración formal de que el código satisface su especificación. |
| **Analizadores estáticos** | Correctitud | Herramientas que examinan el código sin ejecutarlo. |
| **Pruebas unitarias (unit testing)** | Testeabilidad | Prueba de componentes independientes. |
| **Pruebas de integración** | Testeabilidad | Prueba de interconexiones entre componentes. |
| **Pruebas de sistema** | Testeabilidad | Prueba completa antes de la entrega al cliente. |
| **Pruebas de aceptación (alpha testing)** | Testeabilidad | El cliente ejecuta el sistema para verificar cumplimiento. |
| **Prueba top-down con stubs** | Testeabilidad | Prueba del código que llama a otros módulos aún no escritos. |
| **Prueba bottom-up** | Testeabilidad | Prueba de módulos individuales antes de su integración. |
| **Prueba de estrés** | Testeabilidad | Prueba bajo condiciones de carga máxima o superior. |

### 3.2. El proceso de pruebas según ISO 9000-3

Fitzpatrick señala que ISO 9000-3 propone cuatro etapas de prueba (en lugar de las cinco de Sommerville) [FITZ]:

| Etapa (ISO 9000-3) | Correspondencia (Sommerville) | Descripción |
|--------------------|-------------------------------|-------------|
| **Item testing** | Unit testing | Prueba de componentes independientes. Los programadores realizan gran parte de esta prueba como parte de su rol normal. |
| **Integration testing** | Module testing | Integración de componentes independientes en módulos; se prueban las interconexiones. |
| **System testing** | System testing | Prueba completa del sistema que el cliente está a punto de recibir, pero **sin la presencia del cliente**. Es la oportunidad del proveedor de confirmar que la especificación se ha cumplido. |
| **Acceptance testing** | Acceptance testing | El cliente ejecuta el nuevo sistema para garantizar que cumple con las especificaciones originales. También se denomina **prueba alfa (alpha testing)**. |

### 3.3. Técnicas de prueba por estrategia

Fitzpatrick distingue entre **estrategias** y **técnicas** de prueba [FITZ]:

| Estrategia | Descripción | Técnicas asociadas |
|------------|-------------|--------------------|
| **Pruebas funcionales (caja negra)** | Basadas en especificaciones del programa, ignorando su estructura interna. | - |
| **Pruebas estructurales (caja blanca)** | Basadas en la estructura interna del programa. | Análisis de caminos, cobertura de código |
| **Estimación de defectos residuales** | Técnicas estadísticas para estimar cuántos defectos permanecen. | Modelos de confiabilidad, seeding de defectos |

---

## 4. Contención de defectos

### 4.1. Definición y propósito

La contención de defectos busca **limitar el impacto** de los defectos que no fueron detectados y eliminados antes de la operación.

Tian menciona la contención en el contexto de fallas severas [TIA]:

> *"Los accidentes, que se definen como fallas con consecuencias severas, deben evitarse, **contenerse** o manejarse para garantizar la seguridad del personal involucrado y minimizar otros daños."*

### 4.2. Técnicas de contención (inferidas de Fitzpatrick)

Aunque no se nombran explícitamente como "contención", las siguientes técnicas tienen ese propósito:

| Técnica | Descripción | Factor asociado |
|---------|-------------|-----------------|
| **Tolerancia a fallos (fault tolerance)** | El sistema continúa operando (quizás con degradación) cuando ocurren fallos. | Confiabilidad |
| **Manejo de excepciones (exception handling)** | Captura y manejo estructurado de condiciones excepcionales. | Confiabilidad |
| **Programación defensiva (defensive programming)** | Validación de todas las entradas y suposiciones en tiempo de ejecución. | Confiabilidad, integridad |
| **Recuperabilidad (recoverability)** | Capacidad de restaurar el sistema tras una falla. | Confiabilidad (ISO 9126) |

---

## 5. Defect management como visión integral de la calidad

Tian propone que la **ingeniería de calidad (quality engineering)** puede verse como **gestión de defectos (defect management)** [TIA]:

> *"Por extensión, la ingeniería de calidad también puede verse como gestión de defectos. Además de la ejecución de las actividades de aseguramiento de la calidad planificadas, la ingeniería de calidad también incluye:*
> 
> - ***Planificación de la calidad** antes de que se realicen actividades específicas de aseguramiento de la calidad.*
> - ***Medición, análisis y retroalimentación** para monitorear y controlar las actividades de aseguramiento de la calidad.*"

**Implicación:** En este marco, gran parte de la planificación de la calidad puede verse como **estimación y planificación para defectos anticipados**, y gran parte de la retroalimentación se proporciona en términos de diversas evaluaciones y predicciones de calidad relacionadas con defectos [TIA].

---

## 6. Relación con los marcos de trabajo de mejora de procesos

Bedini describe el **mejoramiento de los procesos de software** como un paso importante para la gestión de defectos [BED]:

> *"Un paso importante en el direccionamiento de los problemas del software es tratar las tareas del software como un **proceso** que puede ser controlado, medido e improvisado."*

**Los 6 pasos para mejorar procesos (Bedini)** [BED]:

1. Comprender el estado actual del desarrollo de los procesos.
2. Desarrollar una visión de los procesos anhelados.
3. Establecer una lista de las acciones del mejoramiento de los procesos requeridos en orden de prioridad.
4. Producir un plan que acompañe las acciones requeridas.
5. Asegurar los recursos para ejecutar el plan.
6. Comenzar otra vez con el paso 1.

---

## 7. Mitos sobre procesos de software que afectan la gestión de defectos

Bedini enumera varios **mitos o creencias erróneas** que pueden obstaculizar una gestión efectiva de defectos [BED]:

| Mito | Realidad (según Bedini) |
|------|-------------------------|
| "Comenzar cuando los requerimientos estén bien definidos o claros" | Los requerimientos no son solo trabajo del cliente; el desarrollo no debe postergarse indefinidamente. |
| "Si pasa la etapa de testing, está todo bien" | "Si los estudios existentes sobre esta errónea creencia no prueban esta falsedad, nada lo hará." |
| "La calidad de software no se puede medir" | Existen muchas propuestas para medir la calidad de procesos y productos. |
| "Los problemas son técnicos" | A pesar de nuevos lenguajes y herramientas, los problemas de costo, calendario y calidad permanecen. |
| "Necesitamos el mejor personal" | Los profesionales cometen errores, pero eso no significa que haya que culpabilizarlos sin abordar los problemas de proceso. |
| "La administración del software es diferente" | Los métodos tradicionales de administración pueden y deben usarse. |

---

## 📝 Preguntas de integración (estudio activo)

1. ¿Cuáles son las **tres estrategias genéricas** para tratar defectos según Tian?
2. ¿Qué diferencia hay entre **detección** y **prevención** de defectos?
3. Según ISO 9000-3, ¿cuáles son las **cuatro etapas de prueba** y en qué se diferencia la prueba de sistema de la prueba de aceptación?
4. ¿Qué es la **prueba top-down** y para qué sirven los **stubs**?
5. ¿Qué técnicas de **contención** de defectos se mencionan (implícita o explícitamente) en los documentos?
6. ¿Por qué Tian afirma que la "ingeniería de calidad puede verse como gestión de defectos"?
7. ¿Cuál es el **mito** sobre la calidad de software que Bedini refuta con mayor énfasis?